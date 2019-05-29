/**
 * 单选框 radio
 * created by wxb007 on 2019/5/29 0013 14:36
 * 
 * @param {defaultValue}   默认选中项，数组的下标
 * @param {radioList} 	   显示的数组，数组包含对象，其中显示文本的键为text
 * @param {size} 		   radio的大小
 * @param {color} 		   radio选中的颜色
 * @param {flex} 		   是否flex
 * 
 * @void {onChange}        点击时改变的事件
 */

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        defaultValue: {
            type: Number,
            value: 0
        },
        radioList: {
            type: Array
        },
        size: {
            type: Number || String,
            value: 40,
        },
        color: {
            type: String,
            value: "#07c160"
        },
        flex: {
            type: Boolean,
            value: false
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        selectTap(e) {
            const id = Number(e.target.id);
            this.triggerEvent('onChange', {
                index: id,
                target: this.data.radioList[id]
            }, {})
            this.setData({
                defaultValue: id
            })
        }
    }
})