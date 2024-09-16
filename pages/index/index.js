// index.js
Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        canIUseGetUserProfile: false,
        canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
        imageLink: [{
            index: 'https://maneu.online/static/img/3.gif',
            data: 'https://maneu.online/static/img/3.gif',
        }, {
            index: 'https://maneu.online/static/img/1mcjs.jpg',
            data: 'https://maneu.online/static/img/2mcjs.jpg',
        }, {
            index: 'https://maneu.online/static/img/1xzy.jpg',
            data: 'https://maneu.online/static/img/2xzy.jpg',
        }, {
            index: 'https://maneu.online/static/img/1yqs.jpg',
            data: 'https://maneu.online/static/img/2yqs.jpg',
        }, {
            index: 'https://maneu.online/static/img/1njj.jpg',
            data: 'https://maneu.online/static/img/2njj.jpg',
        }]
    },
    // 事件处理函数
    onLoad() {
        if (wx.getUserProfile) {
            this.setData({
                canIUseGetUserProfile: true
            })
        }
    },
    getUserProfile(e) {
        // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        wx.getUserProfile({
            desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
                console.log(res)
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        })
    },
    getUserInfo(e) {
        // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
        console.log(e)
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    onShareAppMessage() {
        const promise = new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    title: '点击进入徕可视光'
                })
            }, 2000)
        })
        return {
            title: '点击进入徕可视光',
            path: '/pages/index/index',
            imageUrl: '/image/banner.jpg',
            promise
        }
    },

    getReport() {
        wx.navigateTo({
            url: '../reportList/reportList'
        });
    },

    getOrderList() {
        wx.navigateTo({
            url: '../orderList/orderList'
        });
    },

    getDetail(e) {
        var link = e.currentTarget.dataset.hi
        wx.navigateTo({
            url: '../indexList/indexList?link=' + link
        })
    }
})