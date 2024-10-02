// pages/orderList/orderList.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
      contentList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
      this.get_list()
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
    this.get_list()
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

  get_list(e) {
      let that = this
      wx.getStorage({
          key: 'ssk',
          success(res) {
              if (res.data) {
                  wx.request({
                      url: 'https://maneu.online/get_list/',
                      method: 'GET',
                      data: {
                          'code': res.data.id,
                          'text': 'Service',
                      },
                      success: (res) => {
                        console.log(res.data)
                        that.setData({
                              contentList: res.data.content
                          })
                      },
                      fail(res) {
                          app.fail_Remind("请求发送短信失败，请确认发送短信次数是否过多")
                      }
                  })
              } else {
                  app.fail_alter("网络异常请重新登录")
              }
          },
          fail(res) {
              app.fail_alter("请先登录")
          }
      })
  },

  get_detail(e) {
    var code = e.target.dataset.bar_code
    wx.navigateTo({
      url: '../maintain/maintain?code=' + code
    })
  },
});