new Vue({
    el: "#root",
    data: {
        name: "Arju",
        age: 25,
        web1: "https://www.google.com",
        web2: '<a href="https://www.google.com"> Holy grail! </a>',
        x: 0,
        y: 0,
    },
    methods: {
        greet: function(name){
            return "Good Morning! to "+name+" whose age is: "+this.age;
        },
        add: function(val=1){
            this.age += val;
        },
        subtract: function(val=1){
            this.age -= val;
        },
        updateXY: function(e){
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        click: function(){
            alert("Sup");
        }
    }
})