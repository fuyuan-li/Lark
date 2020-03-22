// pages/parser/parser.js
const app = getApp()
const yinfu  = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']

Page({

  /**
   * Page initial data
   */
  data: {
    input: '',
    chordtype: '',
    out: ''
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  readin: function (e) {
    this.setData({
      input: e.detail.value
    })
  },

  parse: function () {
    var bt, root_num, jumps, outchord;
    bt = this.gettype(this.data.input)
    root_num = this.getbase(bt[0])
    jumps = this.getjump(bt[1])
    outchord = this.calcChord(root_num, jumps)
    console.log()
    this.setData({
      out: outchord
    })
  },

  getbase: function (s) {
    return yinfu.indexOf(s)
  },
  
  getjump: function (s) {
    var arr;
    if (s=='Major'){
      arr = [4,7];
    }
    else if (s=='minor'){
      arr = [3,7];
    }
    else{
      arr = [4,7,10];
    }
    return arr
  },

  calcChord: function(root_num, jumps) {
    var i, outs = [yinfu[root_num]];
    for(i=0;i<jumps.length;i++){
      outs.push(yinfu[(root_num+jumps[i])%12]);
    }
    return outs.join(',')
  },

  gettype: function (s) {
    var b,t;
    if (s.endsWith('m')){
      t = 'minor';
      b = s.substr(0,s.length-1);
    }
    else if (s.endsWith('7')){
      t = '7';
      b = s.substr(0, s.length - 1);
    }
    else{
      t = 'Major';
      b = s;
    }
    // this.setData({
    //   chordtype: t
    // })
    return [b,t]
  }
})