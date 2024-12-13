// pages/orderDetail/orderDetail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    order: {},
    store: {},
    report: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.order_content(options.code)
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
  order_content(id){
    wx.request({
      url: 'https://maneu.online/get_detail/',
      method: 'GET',
      data: {
        'text': 'Order',
        'code': id
      },
      success: (res) => {
        if (res.data.status===true){
          this.setData({
            order: res.data.content
          })
          this.store_content(res.data.content.store_id)
          this.report_content(res.data.content.report_id)
        }else{
          alert('订单内容获取失败')
        }
      },
    })
  },
  store_content(id){
    wx.request({
      url: 'https://maneu.online/get_detail/',
      method: 'GET',
      data: {
        'text': 'Store',
        'code': id
      },
      success: (res) => {
        console.log(res.data)
        if (res.data.status===true){
          this.setData({
            store: res.data.content
          })
        }else{
          alert('产品内容获取失败')
        }
      },
    })
  },
  report_content(id){
    wx.request({
      url: 'https://maneu.online/get_detail/',
      method: 'GET',
      data: {
        'text': 'Report',
        'code': id
      },
      success: (res) => {
        console.log(res.data.content)
        if (res.data.status===true){
          this.setData({
            report: res.data.content
          })
        }else{
          alert('报告内容获取失败')
        }
      },
    })
  },
})