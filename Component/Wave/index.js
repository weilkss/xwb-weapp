/**
 * 单选框 wave
 * created by wxb007 on 2019/6/25 0013 14:00
 * 
 * @param {direction}    方向 top和bottom
 * @param {color}      	 填充颜色
 */

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        direction: {
            type: String,
            value: 'top'
        },
        color: {
            type: String,
            value: '#78a5f1'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        width: 0,
        height: 0
    },
    ready() {
        wx.nextTick(() => {
            wx.createSelectorQuery().in(this).select('.canvas').boundingClientRect(rect => {
                this.setData({
                    width: rect.width,
                    height: rect.height,
                }, () => {
                    this.drawBall()
                })
            }).exec()
        })
    },

    /**
     * 组件的方法列表
     */
    methods: {
        drawBall() {
            const {
                width,
                height,
                color,
                direction
            } = this.data
            const c = this.colorRgb(color)
            const p = direction == 'bottom'

            const boHeight = height / 6;
            const posHeight = height / 3;
            let step = 0;
            const context = wx.createCanvasContext('canvas', this);
            const requestAnimFrame = (function() {
                return function(callback) {
                    setTimeout(callback, 1000 / 60);
                };
            })();

            function loop() {
                context.clearRect(0, 0, width, height);
                step++;

                for (let j = 3 - 1; j >= 0; j--) {
                    const angle = (step + j * 50) * Math.PI / 180;
                    const deltaHeight = Math.sin(angle) * boHeight;
                    const deltaHeightRight = Math.cos(angle) * boHeight;

                    context.beginPath();

                    context.moveTo(0, posHeight - deltaHeight);
                    context.bezierCurveTo(
                        width / 2,
                        posHeight + deltaHeightRight,
                        width / 2,
                        posHeight - deltaHeightRight,
                        width,
                        posHeight - deltaHeight);
                    context.lineTo(width, p ? height : 0);
                    context.lineTo(0, p ? height : 0);
                    context.lineTo(0, posHeight - deltaHeight);

                    const grd = context.createLinearGradient(width / 2, 0, width / 2, height)

                    grd.addColorStop(0, `rgba(${c.r},${c.g},${c.b},${p ? j / 10:1})`)
                    grd.addColorStop(1, `rgba(${c.r},${c.g},${c.b},${p ? 1 : j / 10})`)
                    context.fillStyle = grd;

                    context.closePath();
                    context.fill();
                }

                context.draw()
                requestAnimFrame(loop);
            }
            loop();
        },
        colorRgb(hex) {
            /*16进制颜色转为RGB格式*/
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        }
    }
})