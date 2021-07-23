'use strict'

import { app, protocol, BrowserWindow, globalShortcut } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createWindow() {
  
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    // frame: false, /*去掉顶部导航 去掉关闭按钮 最大化最小化按钮*/
    // minimizable: true,
    webPreferences: {
      webSecurity: false,
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
    }
  })
  // 隐藏菜单栏
  win.setMenu(null)
  //配置ESC键退出全屏
  globalShortcut.register('ESC', () => {
    // win.setFullScreen(false);
    // app.quit()
    app.exit();
    // closeFn(e)
  })
  //进入软件即开启全屏
  win.setFullScreen(true);
  // win.on('close', (e) => {
  //   closeFn(e)
  // });
  // function closeFn(e) {
  //   dialog.showMessageBox({
  //     type: 'info',
  //     title: 'Information',
  //     defaultId: 0,
  //     message: '确定要关闭吗？',
  //     buttons: ['最小化','直接退出']
  //   },(index)=>{
  //     if(index===0){
  //       e.preventDefault();		//阻止默认行为，一定要有
  //       win.minimize();	//调用 最小化实例方法
  //     } else {
  //       win = null;
  //       //app.quit();	//不要用quit();试了会弹两次
  //       app.exit();		//exit()直接关闭客户端，不会执行quit();
  //     }
  //   }) 
  // }
  win.on('closed', function () {
    win = null
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
