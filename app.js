new Vue({
    el: '#root',
    data: {
        health: 100,
        ended: false
    },
    methods: {
        decreaseHealth: function(val){
            if(this.health > 0)
                this.health -= val;
            else{
                this.health = 0;
                this.ended = true;
            }
        },
        restartGame: function(){
            this.health = 100;
            this.ended = false;
        }
    },
    computed: {
        
    }
});