<template>
<footer>
    <h1 v-on:click="changeTitle">{{copyright}} for {{title}}</h1>
</footer>
</template>

<script>
export default{
    props: {
        title: {
            type: String
        }
    },
    data(){
        return{
            copyright: "MIT License"
        }
    },
    methods: {
        changeTitle(){
            // this.title = "Sayonara!"
            this.$emit('changeContent', "Changed via event from Footer");
        }
    }
}
</script>

<style scoped>
footer{
    background: black;
    padding: 10px;
}
h1{
    color: white;
    text-align: center;
}
</style>