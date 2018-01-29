var vm = new Vue({
    el: '#app',
    data: {
        test: 'hello vue!',
        website: 'https://cn.bing.com/',
        websiteTag: '<a href="www.baidu.com">百度一下</a>',
        mouseX: 0,
        mouseY: 0
    },
    methods: {
        helloWorld: function () {
            console.error('hello wolrd');
        },
        hey: function (a) {
            console.warn('hey ' + a);
        },
        updateXY: function (event) {
            this.mouseX = event.offsetX;
            this.mouseY = event.offsetY;
        },
        keyUp: function () {
            console.error("松开按键了!");
        }
    }
});