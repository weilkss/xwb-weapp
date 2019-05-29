/**
 * 地区选择 三级联动
 * created by wxb007 on 2019/5/20 0013 11:06
 * 
 * @param {visible}  	控制选择层的显示和隐藏
 * @param {maskShow}    是否显示蒙层
 * @param {cityData}    省市区数据
 */

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        visible: {
            type: Boolean,
            value: false
        },
        maskShow: {
            type: Boolean,
            value: true
        },
        cityData: {
            type: Array,
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        provinces: [],
        citys: [],
        areas: [],
        value: [0, 0, 0],
        province: {},
        city: {},
        area: {}
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleNYZAreaChange(e) {
            const value = e.detail.value;
            const cityData = this.data.cityData
            const index = this.data.value;
            const selectCitys = cityData[value[0]]

            /**
             * 滚动的是省
             * 省改变 市、区都不变
             */
            if (index[0] != value[0]) {
                this.setData({
                    citys: selectCitys.children,
                    areas: selectCitys.children[0].children,
                    value: [value[0], 0, 0],
                    province: selectCitys,
                    city: selectCitys.children[0],
                    area: selectCitys.children[0].children[0]
                })
            } else if (index[1] != value[1]) {
                /**
                 * 市改变了 省不变 区变
                 */
                this.setData({
                    citys: selectCitys.children,
                    areas: selectCitys.children[value[1]].children,
                    value: [value[0], value[1], 0],
                    province: selectCitys,
                    city: selectCitys.children[value[1]],
                    area: selectCitys.children[value[1]].children[0]
                })
            } else if (index[2] != value[2]) {
                /**
                 * 区改变了
                 */
                this.setData({
                    citys: selectCitys.children,
                    areas: selectCitys.children[value[1]].children[index[2]],
                    value: [index[0], index[1], index[2]],
                    province: selectCitys,
                    city: selectCitys.children[value[2]],
                    area: selectCitys.children[value[1]].children[value[2]]
                })
            }
        },
        /**
         * 确定按钮的点击事件
         */
        handleNYZAreaSelect(e) {
            this.triggerEvent('sureSelectArea', e, {})
        },
        /**
         * 取消按钮的点击事件
         */
        handleNYZAreaCancle(e) {
            this.setData({
                visible: false
            })
        }
    },
    /**
     * 在组件实例进入页面节点树时执行
     */
    attached() {
        let provinces = []

        /**
         * 获取所有的省 默认显示数组第一位
         */
        for (let item of this.data.cityData) {
            provinces.push(item)
        }

        this.setData({
            provinces,
            citys: provinces[0].children,
            areas: provinces[0].children[0].children,
            province: provinces[0],
            city: provinces[0].children[0],
            area: provinces[0].children[0].children[0]
        })
    }
})