<template>
    <div>
        <h1>{{blogContent.title}}</h1>
        <article>{{blogContent.body}}</article>
    </div>
</template>

<script>

export default {
    data(){
        return{
            id: this.$route.params.id,
            blogContent: ''
        }
    },
    created(){
        this.$http.get('http://jsonplaceholder.typicode.com/posts/'+this.id).then(res=>{
            console.log(res);
            this.blogContent = res.body;
        })
    }
}
</script>

<style scoped>

</style>
