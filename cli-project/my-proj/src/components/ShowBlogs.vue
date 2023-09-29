<template>
    <!-- <div v-orient id="show-blogs"> -->
    <div v-orient:column="'wide'" id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="search title" />
        <div v-for="blog in blogs" class="single-blog">
            <router-link v-bind:to="'/blog/'+blog.id"><h2 v-greenHeading>{{ blog.title | to-upper }}</h2></router-link>
            <article>{{ blog.content | trim-content}}</article>
            <article>{{ blog.author }}</article>
            <article>Categories:
                <ul>
                    <li v-for="i in blog.categories">{{i}}</li>
                </ul>
            </article>
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
        this.$http.get('https://react-sending-data-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json').then(function(data){
            return data.json(); //a promise
        }).then(res=>{
            var blogsArray = [];
            for(let key in res){
                res[key].id = key;
                blogsArray.push(res[key])
            }
            this.blogs = blogsArray;
        })
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