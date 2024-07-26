// pages/orderList/orderList.js
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    let that = this
    wx.getStorage({
      key: 'ssk',
      success(res) {
        wx.request({
          url: 'https://maneu.online/get_list/',
          method: 'GET',
          data: {
            'code': res.data.id,
            'text': 'Order'
          },
          success: (res) => {
            that.setData({
              contentList: res.data.content
            })
          }
        })
      },
      fail(res) {
        wx.redirectTo({
          url: '../userLogin/userLogin'
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  getOrder(e) {
    let code = e.target.dataset.bar_code
    wx.navigateTo({
      url: '../order/order?code=' + code
    })
  },
});