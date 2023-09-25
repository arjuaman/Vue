new Vue({
    el: "#root",
    data: {
        age: 20, a: 0, b:  0
    },
    methods: {
        addToA: function(){
            console.log("A is run -> normal -> would run even if any other changes");
            return this.a + this.age
        }
    },
    computed: {
        addToB: function(){
            console.log("B is run -> computed -> won't run if a changes");
            return this.b + this.age
        }
    }
})