// custom-tab-bar/index.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      let url = '';
      switch (event.detail) {
        case 0:
          url = '/pages/home/home'
          break;
        case 1:
          url = '/pages/types/types'
          break;
        case 2:
          url = '/pages/cart/cart'
          break;
        case 3:
          url = '/pages/member/member'
          break;
        default:
          break;
      }
      wx.switchTab({url})
      this.setData({
        active: event.detail
      })
    }
  }
})
