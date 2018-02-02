Vue.component('test-component',{
    template:`
    <div>
        <p>一段文本{{name}}</p>
        <button v-on:click="changeName()">切换名字</button>
    </div>`,
    data:function(){
        return {
            name:"你好"
        };
    },
    methods:{
        changeName:function(){
            this.name="新的名字。";
        }
    }
});

var vm = new Vue({
    el: '#app',
    data: {
        test: 'hello vue!',
        website: 'https://cn.bing.com/',
        websiteTag: '<a href="www.baidu.com">百度一下</a>',
        mouseX: 0,
        mouseY: 0,
        changeColor: false
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
