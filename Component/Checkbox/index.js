/**
 * 复选框 checkbox
 * created by wxb007 on 2019/5/30 0013 10:36
 * 
 * @param {checkKey}        默认的判断键，如果判断键为checked 则不用传，比如，是否选中的判断条件是ispay,则传值ispay
 * @param {ckeckboxList}    显示的数组，数组包含对象，其中显示文本的键为text,以及判断条件
 * @param {size}            checkbox的大小
 * @param {color}           checkbox选中的颜色
 * @param {flex}            是否flex
 * @void {onChange}         点击时改变的事件
 */

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        checkKey: {
            type: String,
            value: "checked"
        },
        ckeckboxList: {
            type: Array
        },
        size: {
            type: Number,
            value: 40,
        },
        color: {
            type: String,
            value: "#07c160"
        },
        flex: {
            type: Boolean
        }
    },
    attached() {
        let {
            ckeckboxList,
            checkKey
        } = this.data;
        if (checkKey == 'checked') {
            return;
        }
        for (let item of ckeckboxList) {
            item.checked = item[checkKey]
        }

        this.setData({
            ckeckboxList
        })
    },

    /**
     * 组件的方法列表
     */
    methods: {
        selectCheck(e) {
            let {
                ckeckboxList,
                checkKey
            } = this.data;
            let id = Number(e.target.id),
                target = [],
                temp = [];
            ckeckboxList[id].checked = !ckeckboxList[id].checked;
            ckeckboxList[id][checkKey] = !ckeckboxList[id][checkKey];

            this.setData({
                ckeckboxList
            })

            temp = JSON.parse(JSON.stringify(ckeckboxList))

            for (let item of temp) {
                delete item.checked;
                if (item[checkKey]) {
                    target.push(item)
                }
            }

            this.triggerEvent('onChange', {
                target
            }, {})
        }
    }
})