new Vue({
    el: "#root",
    data: {
        name: "",
        age: "",
        city: ""
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