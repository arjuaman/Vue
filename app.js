new Vue({
    el: "#root",
    data: {
        name: "Arju",
        age: 25,
        web1: "https://www.google.com",
        web2: '<a href="https://www.google.com"> Holy grail! </a>'
    },
    methods: {
        greet: function(){
            return "Morning!";
        }
    }
})