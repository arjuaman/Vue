import AddBlog from './components/AddBlog';
import ShowBlogs from './components/ShowBlogs';

export default [
    {
        path: '/',
        component: ShowBlogs
    },
    {
        path: '/add',
        component: AddBlog
    },
]