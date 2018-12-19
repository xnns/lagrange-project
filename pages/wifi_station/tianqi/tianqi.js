var myCharts = require("../../../utils/wxcharts.js")//引入一个绘图的插件

var lineChart_sound = null

var app = getApp()



Page({

  data: {



  },

  onPullDownRefresh: function () {

    console.log('onPullDownRefresh', new Date())





  },







  //把拿到的数据转换成绘图插件需要的输入格式

  convert: function () {

    var categories = [];

    var sound = [];





    var length = app.globalData.sound.datapoints.length

    for (var i = 0; i < length; i++) {

      categories.push(app.globalData.sound.datapoints[i].at.slice(11, 19));

      sound.push(app.globalData.sound.datapoints[i].value);

    }

    return {

      categories: categories,

      sound: sound,

    }

  },



  onLoad: function () {

    var wheatherData = this.convert();



    //得到屏幕宽度

    var windowWidth = 320;

    try {

      var res = wx.getSystemInfoSync();

      windowWidth = res.windowWidth;

    } catch (e) {

      console.error('getSystemInfoSync failed!');

    }



    var wheatherData = this.convert();



    //新建声音图表

    lineChart_sound = new myCharts({

      canvasId: 'sound',

      type: 'line',

      categories: wheatherData.categories,

      animation: true,

      background: '#f5f5f5',

      series: [{

        name: 'sound',

        data: wheatherData.sound,

        format: function (val, name) {

          return val.toFixed(2);

        }

      }],

      xAxis: {

        disableGrid: true

      },

      yAxis: {

        title: 'sound',

        format: function (val) {

          return val.toFixed(2);

        },

        min: 55

      },

      width: windowWidth,

      height: 450,

      dataLabel: false,

      dataPointShape: true,

      extra: {

        lineStyle: 'curve'

      }

    });





  },





})
