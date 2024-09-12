// pages/reportDetail/reportDetail.js

Page({
    /**
     * 页面的初始数据
     */
    data: {},

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.request({
            url: 'https://maneu.online/get_detail/',
            method: 'GET',
            data: {
                'text': 'Refraction',
                'code': options.code
            },
            success: (res) => {
                let content = res.data.content
                this.setData({
                    OD_LT: content.OD_LT,
                    OD_AD: content.OD_AD,
                    OD_ADD: content.OD_ADD,
                    OD_AK: content.OD_AK,
                    OD_AL: content.OD_AL,
                    OD_AX: content.OD_AX,
                    OD_BCVA: content.OD_BCVA,
                    OD_CCT: content.OD_CCT,
                    OD_CYL: content.OD_CYL,
                    OD_LT: content.OD_LT,
                    OD_SPH: content.OD_SPH,
                    OD_VA: content.OD_VA,
                    OD_VT: content.OD_VT,
                    OS_AD: content.OS_AD,
                    OS_ADD: content.OS_ADD,
                    OS_AK: content.OS_AK,
                    OS_AL: content.OS_AL,
                    OS_AX: content.OS_AX,
                    OS_BCVA: content.OS_BCVA,
                    OS_CCT: content.OS_CCT,
                    OS_CYL: content.OS_CYL,
                    OS_LT: content.OS_LT,
                    OS_SPH: content.OS_SPH,
                    OS_VA: content.OS_VA,
                    OS_VT: content.OS_VT,
                    remark: content.remark
                })
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

    }
})