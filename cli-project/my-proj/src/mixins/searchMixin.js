export default {
    computed: {
        filteredBlogs(){
            return this.blogs.filter((blog)=>{
                //condition for filtering
                return blog.title.match(this.search);
            });
        }
    }
}