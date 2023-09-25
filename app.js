var one = new Vue({
    el: '#root1',
    data: {
        title: "Hello from instance 1"
    },
    methods: {
        changeTitleOfSecond: function(){
            two.title = "TItle changed";
        }
    },
    computed: {

    }
});

var two = new Vue({
    el: '#root2',
    data: {
        title: "Yo from instance 2"
    },
    methods: {
        
    },
    computed: {

    }
});

// Can be done from anywhere like a nomral JS script too, example:
// one.title = "Childe"