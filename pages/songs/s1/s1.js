// pages/songs/s1/s1.js
Page({
  data: {
  },
  onReady: function () {
    this.innerAudioContext = wx.createInnerAudioContext()
  },
  audioPlay: function () {
    console.log('audioPlay in .js')
    // const innerAudioContext = wx.createInnerAudioContext()
    this.innerAudioContext.src = 'audio/Love Someone 清唱+吉他伴奏 demo.mp3'
    this.innerAudioContext.play()
    console.log('play ending .js')
  },
  audioPause: function () {
    this.innerAudioContext.pause()
  }
})