// start.js
Page({
  data: {
    opacity: 0.4,
    disabled: true,
    threshold: 0,
    rule: 'up',
    items: [
      { name: 'up', value: '高于门限报警', checked: 'ture' },
      { name: 'down', value: '低于门限报警' },
    ]
  },

  radioChange: function (e) {
    //保存报警规则到当前页面的数据
    if (e.detail.value != "") {
      this.setData({
        rule: e.detail.value
      })
    }
    console.log(this.data.rule)
  },

  send: function () {
    //发送门限数据和报警规则到后台服务器
    var thres = this.data.threshold
    var Rule = this.data.rule
    const requestTask = wx.request({
      url: 'https://xxxxxxxx.xxxxxx.xx', //改成腾讯云给你分配的域名
      header: {
        'content-type': 'application/json',
      },

      //发送给服务器的数据
      data: {
        threshold: thres,
        rule: Rule
      },
      success: function (res) {
        //成功拿到服务器返回的数据后执行这个函数
        var flag = res.data;
        console.log(flag)
        //返回1则报警
        if (flag == "1") {
          wx.showModal({
            title: '警报！',
            content: '温度异常！',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        //返回0则不报警
        else if (flag == "0") {
          wx.showModal({
            title: '提示～',
            content: '温度处于正常范围。',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
      },

      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },


  /**

   * 页面的初始数据

   */

  data: {



  },






  getDataFromOneNet: function () {

    //从oneNET请求我们的Wi-Fi气象站的数据

    const requestTask = wx.request({

      url: 'https://api.heclouds.com/devices/505220313/datapoints?datastream_id=sound&limit=15',

      header: {

        'content-type': 'application/json',

        'api-key': 'cNW6ZOFioD0M1GYvIMizM2upHxY='

      },

      success: function (res) {

        //console.log(res.data)

        //拿到数据后保存到全局数据

        var app = getApp()

        app.globalData.sound = res.data.data.datastreams[0]

        console.log(app.globalData.sound)

        //跳转到天气页面，根据拿到的数据绘图

        wx.navigateTo({

          url: '../wifi_station/tianqi/tianqi',

        })

      },



      fail: function (res) {

        console.log("fail!!!")

      },



      complete: function (res) {

        console.log("end")

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
