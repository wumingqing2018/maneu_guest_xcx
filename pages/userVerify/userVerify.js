// pages/userVerify/userVerify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    call: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    this.setData({
      call: e.call
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  setCall(e) {
    wx.request({
      url: 'https://maneu.online/login/',
      method: "GET",
      data: {
        "call": this.data.call,
        "code": e.detail.value.input,
      },
      success(res) {
        if (res.data.status == true){
          wx.setStorage({
            key: "ssk",
            data: e.data.content,
            success() {
              wx.switchTab({
                url: '../userPage/userPage',
              })
            },
          })
        }else{
          wx.showModal({
            title: '提示',
            content: '验证码错误请输入正确的验证码',
            showCancel: false,
            confirmText: "好的",
            complete: (res) => {
              if (res.cancel) {
                
              }
          
              if (res.confirm) {
                
              }
            }
          })
        }
      }
    })
  },

  formReset(e) {
    wx.switchTab({
      url: '../userPage/userPage',
    })
  }
})