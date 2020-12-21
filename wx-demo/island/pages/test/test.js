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
        header: {
          Authorization: this._encode()
        },
        success(res) {
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
    const base64 = Base64.encode(token+':')
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
    this.getReq('/classic/latest').then(res => {
      console.log(res)
    })
  },
  onGetNext() {
    this.getReq('/classic/6/next').then(res => {
      console.log(res)
    })
  },

  onGetPrevious() {
    this.getReq('/classic/6/previous').then(res => {
      console.log(res)
    })
  },
  onLike() {
    this.postReq('/like', {
      art_id: 1,
      type: 100
    }).then(res => {
      console.log(res)
    })
  },
  onDislike() {
    this.postReq('/like/cancel', {
      art_id: 1,
      type: 100
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log('err:', err)
    })
  },
  onGetLike() {
    this.getReq('/classic/100/1/favor').then(res => {
      console.log(res)
    })
  },
  onGetmyLike() {
    this.getReq('/classic/favor').then(res => {
      console.log(res)
    })
  },
  onGetmyLikeDetail() {
    this.getReq('/classic/100/1').then(res => {
      console.log(res)
    })
  }
})