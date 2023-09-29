<template>
    <!-- <div v-orient id="show-blogs"> -->
    <div v-orient:column="'wide'" id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="search title" />
        <div v-for="blog in filteredBlogs" class="single-blog">
            <router-link v-bind:to="'/blog/'+blog.id"><h2 v-greenHeading>{{ blog.title | to-upper }}</h2></router-link>
            <article>{{ blog.body | trim-content }}</article>
        </div>
    </div>
</template>

<script>
import searchMixin from "./../mixins/searchMixin";

export default {
    data () {
        return {
            blogs: [],
            search: ''
        }
    },
    methods: {

    },
    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogs = data.body.slice(0,5);
        });
    },
    computed: {
        
    },
    filters: {
        'to-upper': (val)=>{
            return val.toUpperCase();
        }
    },
    directives: {
        'greenHeading': {
            bind(el, binding, vnode){
                el.style.color = "#427462";
            }
        }
    },
    mixins: [searchMixin]
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>