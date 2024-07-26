// pages/orderDetail/orderDetail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    "time": "",
    "OD_ADD": "",
    "OD_AX": "",
    "OD_BCVA": "",
    "OD_CYL": "",
    "OD_FR": "",
    "OD_PR": "",
    "OD_SPH": "",
    "OD_VA": "",
    "OS_ADD": "",
    "OS_AX": "",
    "OS_BCVA": "",
    "OS_CYL": "",
    "OS_FR": "",
    "OS_PR": "",
    "OS_SPH": "",
    "OS_VA": "",
    "PD": "",
    "store_function": "",
    "remark": "",
    "vision_remark": "",
    "vision_content": [],
    "store": [],
    "time": ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.request({
      url: 'https://maneu.online/get_detail/',
      method: 'GET',
      data: {
        'text': 'Order',
        'code': options.code
      },
      success: (res) => {
        console.log(res.data)
        this.setData({
          OD_ADD: res.data.vision.OD_ADD,
          OD_SPH: res.data.vision.OD_SPH,
          OD_AX: res.data.vision.OD_AX,
          OD_BCVA: res.data.vision.OD_BCVA,
          OD_CYL: res.data.vision.OD_CYL,
          OD_FR: res.data.vision.OD_FR,
          OD_PR: res.data.vision.OD_PR,
          OD_SPH: res.data.vision.OD_SPH,
          OD_VA: res.data.vision.OD_VA,
          OS_ADD: res.data.vision.OS_ADD,
          OS_SPH: res.data.vision.OS_SPH,
          OS_AX: res.data.vision.OS_AX,
          OS_BCVA: res.data.vision.OS_BCVA,
          OS_CYL: res.data.vision.OS_CYL,
          OS_FR: res.data.vision.OS_FR,
          OS_PR: res.data.vision.OS_PR,
          OS_SPH: res.data.vision.OS_SPH,
          OS_VA: res.data.vision.OS_VA,
          PD: res.data.vision.PD,
          store_function: res.data.vision.function,
          remark: res.data.vision.remark,
          store: res.data.store,
          time: res.data.time
        })
      },
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

  }
})