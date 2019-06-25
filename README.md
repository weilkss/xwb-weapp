# xwbui weapp-ui

#### 小程序组件库 基本组件 其他复杂业务场景组件

##### - [AreaPicker] 省市区三级联动选择器
##### - [Radio]      单选框
##### - [checkbox]   复选框

### 文档
#### AreaPicker
```js

/**
* 地区选择 三级联动
* created by wxb007 on 2019/5/20 0013 11:06
* 
* @param {visible}  	  控制选择层的显示和隐藏
* @param {maskShow}       是否显示蒙层
* @param {cityData}       省市区数据
*/

```
#### Radio
```js

/**
* 单选框 radio
* created by wxb007 on 2019/5/29 0013 14:36
* 
* @param {defaultValue}    默认选中项，数组的下标
* @param {radioList}       显示的数组，数组包含对象，其中显示文本的键为text
* @param {size}            radio的大小
* @param {color}           radio选中的颜色
* @param {flex}            是否flex
* @void {onChange}         点击时改变的事件
*/

```
### checkbox
```js

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

```
### wave
```js

/**
 * 单选框 wave
 * created by wxb007 on 2019/6/25 0013 14:00
 * 
 * @param {direction}    方向 top和bottom
 * @param {color}      	 填充颜色
 */
 
```

### 其他说明

-   city json数据 [Administrative-divisions-of-China](https://github.com/modood/Administrative-divisions-of-China)

