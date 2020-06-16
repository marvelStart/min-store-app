// pages/types/types.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "商品分类",
    activeKey: 0,

    typesLabel: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      typesLabel: [
        {
          id: 0,
          name: '控制器'
        }, {
          id: 1,
          name: '发电机'
        }, {
          id: 2,
          name: '蓄电池'
        }, {
          id: 3,
          name: '充电器'
        },
      ]
    })
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        active: 1
      })
    }
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

  },

  upper(e) {
    console.log('upper', e)
  },

  lower(e) {
    console.log('lower', e)
  },

})