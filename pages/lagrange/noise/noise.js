// pages/lagrange/noise/noise.js
Page({


  data: {
    motto1: "您不要着急\n",
    motto2: "当您周围环境噪音过高\n",
    motto3:"您可以联系管理者\n",
    motto4: "点击下方加入匿名群聊"  
  },
  join: function () {

    wx.request({

      url: 'https://api.heclouds.com',

      method: 'POST',

      success: function (e) {

        wx.navigateTo({

          url: '../../chat/chat?to=' + e.data.data,

        })

      }

    })



  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})
