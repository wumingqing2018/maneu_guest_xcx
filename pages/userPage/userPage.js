// pages/userPage/userPage.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        islogin: false,
        name: '',
        call: '',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (e) {

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
        const that = this
        wx.getStorage({
            key: 'ssk',
            success(res) {
                console.log(res)
                that.setData({
                    islogin: true,
                    name: res.data.name,
                    call: res.data.call
                })
            },
        })
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

    userLogin(e) {
        wx.navigateTo({
            url: '../userLogin/userLogin',
        })
    },

    getOrederList() {
        wx.navigateTo({
            url: '../orderList/orderList',
        })
    },

    getServiceList() {
        wx.navigateTo({
            url: '../after-salesList/after-salesList',
        })
    },

    getReport() {
        wx.navigateTo({
            url: '../reportList/reportList',
        })
    },

    userLogout(e) {
        wx.removeStorage({
            key: 'ssk',
            success(res) {
                wx.reLaunch({
                    url: '../userPage/userPage',
                })
            }
        })
    }
})