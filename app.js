new Vue({
    el: "#root",
    data: {
        name: "Arju",
        age: 25,
        city: "Patna"
    },
    methods: {
        logName: function(){
            console.log("Name entered");
        },
        logAge: function(){
            console.log("Age entered");
        },
        logCity: function(){
            console.log("City entered");
        }
    }
})