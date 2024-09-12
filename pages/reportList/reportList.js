// pages/reportList/reportList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentList: []
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
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},

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
              'text': 'Refraction'
            },
            success: (res) => {
              that.setData({
                contentList: res.data.content
              })
            }
          })
        } else {
          wx.removeStorage({
            key: 'ssk',
          })
          wx.redirectTo({
            url: '../userLogin/userLogin'
          });
        }
      },
      fail(res) {
        wx.redirectTo({
          url: '../userLogin/userLogin'
        });
      }
    })
  },

  get_detail(e) {
    let code = e.target.dataset.bar_code
    wx.navigateTo({
      url: '../report/report?code=' + code
    })
  },
})