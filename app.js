// // var datum = {
// //     boss: "Oogway",
// //     disciple: "Shifu"
// // }

// Vue.component("greetcomponent",{
//     template: '<div>{{boss}} passes the baton to {{disciple}} <button v-on:click.once="changeName">Change Name</button></div>',
//     data: function(){
//         return{
//             boss: "Oogway",
//             disciple: "Shifu"
//         }
//     },
//     methods: {
//         changeName: function(){
//             this.boss = "Mario",
//             this.disciple = "Luigi"
//         }
//     }
// });

var one = new Vue({
    el: '#root1',
    data: {
        anime: "Naruto"
    },
    methods: {
        readTheRefs: function(){
            console.log(this.$refs);
            this.anime = this.$refs.inputRef.value;
        }
    },
    computed: {
        
    }
});

// var two = new Vue({
//     el: '#root2',
//     data: {
        
//     },
//     methods: {
        
//     },
//     computed: {

//     }
// });

// Can be done from anywhere like a nomral JS script too, example:
// one.title = "Childe"