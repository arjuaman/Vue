new Vue({
    el: "#root",
    data: {
        available: false,
        nearby: false
    },
    methods: {
        
    },
    computed: {
        appendClassNames: function(){
            return{
                available: this.available,
                nearby: this.nearby
            }
        }        
    }
})