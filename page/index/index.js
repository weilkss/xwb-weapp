import cityData from '../../util/city.js'

Page({
    data: {
        cityData,
        province: '',
        city: '',
        area: '',
        visible: false,
        //radio
        radioData: [{
                text: "男"
            },
            {
                text: "女"
            }
        ],
        aaaa: [1, 2],
        //checkbox
        checkKey: 'checked',
        checkboxData: [{
                text: "星期一",
                ispay: false,
            },
            {
                text: "星期二",
				ispay: true,
            },
            {
                text: "星期三",
				ispay: false,
            },
            {
                text: "星期四",
				ispay: false,
            },
            {
                text: "星期五",
				ispay: false,
            },
            {
                text: "星期六",
				ispay: false,
            },
            {
                text: "星期日",
				ispay: false,
            },
        ]
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
    },
    // radio
    onChangeRadio(e) {
        console.log(e)
    },
    //checkbox
    onChangeCheckbox(e) {
        console.log(e)
    }
})