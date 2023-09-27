<template>
<footer>
    <h1>{{copyright}}</h1>
</footer>
</template>

<script>
export default{
    data(){
        return{
            copyright: "MIT License"
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