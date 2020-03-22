// pages/songs/s0/s0.js
Page({

  /**
   * Page initial data
   */
  data: {

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
    // this.audioCtx = wx.createAudioContext('myAudio')
    // this.audioCtx.obeyMuteSwitch = false
    this.innerAudioContext = wx.createInnerAudioContext()
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

 audioPlay: function () {
   console.log('audioPlay in .js')
  //  const innerAudioContext = wx.createInnerAudioContext()
   this.innerAudioContext.src = 'audio/推开世界的门 第一次合 demo.m4a'
   this.innerAudioContext.play()
   console.log('play ending .js')
 },
 play: function() {
   console.log('play in .js')
 },
 audioPause: function () {
   this.innerAudioContext.pause()
 }

})