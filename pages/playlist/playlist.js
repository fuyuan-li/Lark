// pages/playlist/playlist.js
Page({

  /**
   * Page initial data
   */
  data: {
    action: {

      method: 'pause'

    }
  },

  /**
   * audio play
   */
  audioPlay: function () {

    var that = this;

    if (that.data.action.method == 'pause') {

      that.setData({

        action: {

          method: 'play'//播放

        }

      });

    } else if (that.data.action.method == 'play') {

      that.setData({

        action: {

          method: 'pause' //暂停

        }

      });
    }
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

  }
})