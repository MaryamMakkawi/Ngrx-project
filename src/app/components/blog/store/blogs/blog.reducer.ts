import { createReducer, on } from '@ngrx/store';
import { addBlog, deleteBlog, loadBlogs, updateBlog } from './blog.action';
import { initBlogsState } from './blog.state';

export const blogReducer = createReducer(
  initBlogsState,
  on(loadBlogs, (state) => {
    return {
      ...state,
    };
  }),
  on(addBlog, (state, action) => {
    const blog = { ...action.blog };
    return {
      blogs: [...state.blogs, blog],
    };
  }),
  on(updateBlog, (state, action) => {
    const blog = { ...action.blog };
    const updateBlogId = blog.id;

    let blogs = state.blogs.map((data) => {
      if (data.id === updateBlogId) data = blog;
      return data;
    });

    return {
      blogs: [...blogs],
    };
  }),
  on(deleteBlog, (state, action) => {
    const blogDelete = { ...action.blogDelete };
    const filteredBlogs = state.blogs.filter((blog) => blog.id !== blogDelete.id);
    const blogs = filteredBlogs;
    return {
      blogs: [...blogs],
    };
  })
);
