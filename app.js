Vue.component("greetcomponent",{
    template: '<div>{{boss}} passes the baton to {{disciple}} <button v-on:click.once="changeName">Change Name</button></div>',
    data: function(){
        return{
            boss: "Oogway",
            disciple: "Shifu"
        }
    },
    methods: {
        changeName: function(){
            this.boss = "Mario",
            this.disciple = "Luigi"
        }
    }
});

var one = new Vue({
    el: '#root1',
    data: {
        
    },
    methods: {
        
    },
    computed: {

    }
});

var two = new Vue({
    el: '#root2',
    data: {
        
    },
    methods: {
        
    },
    computed: {

    }
});

// Can be done from anywhere like a nomral JS script too, example:
// one.title = "Childe"