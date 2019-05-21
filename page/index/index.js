import cityData from '../../util/city.js'

Page({
    data: {
        cityData,
        province: '',
        city: '',
        area: '',
        visible: false
    },
    sureSelectAreaListener(e) {
        this.setData({
            visible: false,
            province: e.detail.currentTarget.dataset.province.name,
            city: e.detail.currentTarget.dataset.city.name,
            area: e.detail.currentTarget.dataset.area.name
        })
    },
    chooseAddress() {
        this.setData({
            visible: true
        })
    }
})