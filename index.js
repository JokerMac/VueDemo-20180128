var vm = new Vue({
    el: '#app',
    data: {
        test: 'hello vue!'
    },
    methods: {
        helloWorld: function () {
            console.error('hello wolrd');
        },
        hey:function(){
            console.warn('hey');
        }
    }
});