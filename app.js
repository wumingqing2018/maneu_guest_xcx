/* app.js
App({
    onLaunch() {
        // 展示本地存储能力
        const logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 登录
        globalData: {
            userInfo: null
        }
    },

    wxLogin() {
        wx.login({
            success(res) {
                if (res.code) {
                    //发起网络请求
                    wx.request({
                        url: 'https://example.com/onLogin',
                        data: {
                            code: res.code
                        }
                    })
                } else {
                    console.log('登录失败！' + res.errMsg)
                }
            }
        })
    },
})
*/
App({

    /**
     * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
     */
    onLaunch: function () {

    },

    /**
     * 当小程序启动，或从后台进入前台显示，会触发 onShow
     */
    onShow: function (options) {

    },

    /**
     * 当小程序从前台进入后台，会触发 onHide
     */
    onHide: function () {

    },

    /**
     * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
     */
    onError: function (msg) {

    },


    get_detail(code) {
        wx.navigateTo({
            url: '../order/order?code=' + code
        })
    },

    fail_Remind(code) {
        wx.showModal({
            content: code,
            showCancel: false,
            complete: (res) => {
                if (res.confirm) {

                }
            }
        })
    },


    fail_alter(code) {
        wx.showModal({
            content: code,
            showCancel: false,
            complete: (res) => {
                if (res.confirm) {
                    wx.redirectTo({
                        url: '../userLogin/userLogin'
                    });
                }
            }
        })
    }
})