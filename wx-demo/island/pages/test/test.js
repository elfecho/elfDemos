// pages/test/test.js
import {Base64} from 'js-base64'
Page({
  data: {

  },
  getReq(url, data) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: 'http://localhost:3000/v1' + url,
        data: data,
        method: 'GET',
        header: {
          Authorization: this._encode()
        },
        success(res) {
          resolve(res)
        },
        fail(err) {
          reject(err)
        }
      })
    })
  },
  postReq(url, data) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: 'http://localhost:3000/v1' + url,
        data: data,
        method: 'POST',
        success(res) {
          console.log(res)
          const code = res.statusCode.toString()
          if (code.startsWith('2')) {
            resolve(res)
          } else {
            reject(res)
          }
        },
        fail(err) {
          reject(err)
        }
      })
    })
  },
  _encode() {
    const token = wx.getStorageSync('token')
    const base64 = Base64(token+':')
    // 完整的传参  Authorization: Basic base64(account:password)
    return 'Basic ' + base64
  },
  onLoad() {

  },
  onGetToken() {
    wx.login({
      success: (res) => {
        this.postReq('/token', {
          account: res.code,
          type: 100
        }).then(res => {
          wx.setStorageSync('token', res.data.token)
        })
      }
    })
  },
  onVerifyToken() {
    this.postReq('/token/verify', {
      token: wx.getStorageSync('token')
    }).then(res => {
      console.log(res)
    })
  },

  onGetLatest() {
    this._encode()
    return false
    this.getReq('/classic/latest', {
      token: wx.getStorageSync('token')
    }).then(res => {
      console.log(res)
    })
  }
})