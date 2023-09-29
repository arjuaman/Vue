<template>
    <div>
        <h1>{{blogContent.title}}</h1>
        <article>{{blogContent.content}}</article>
        <article>{{ blogContent.author }}</article>
            <article>Categories:
                <ul>
                    <li v-for="i in blogContent.categories">{{i}}</li>
                </ul>
            </article>
    </div>
</template>

<script>

export default {
    data(){
        return{
            id: this.$route.params.id,
            blogContent: {}
        }
    },
    created(){
        this.$http.get('https://react-sending-data-default-rtdb.asia-southeast1.firebasedatabase.app/posts/'+this.id+'.json').then(res=>{
            return res.json();
        }).then(res => {
            this.blogContent = res;
        })
    }
}
</script>

<style scoped>

</style>
