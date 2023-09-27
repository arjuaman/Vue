<template>
    <header>
        <h1>{{title}}</h1>
    </header>
</template>

<script>
import { bus } from "./../main";
export default{
    props: {
        title: {
            type: String
        }
    },
    data(){
        return{
            title: "Animeverse"
        }
    },
    created(){
        bus.$on('changeContent', data => {
            this.title = data;
        });
    }
}
</script>

<style scoped>
header{
    background: green;
    padding: 10px;
}
h1{
    color: #222;
    text-align: center;
}
</style>