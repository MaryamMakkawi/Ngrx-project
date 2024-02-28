import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersSuccess } from './user.action';
import { initUsersState } from './user.state';
import { IUser } from './user.interface';

export const userReducer = createReducer(
  initUsersState,
  on(loadUsers, (state) => {
    return {
      ...state,
    };
  }),
  on(loadUsersSuccess, (state, action) => {
    console.log(action.users);
    return {
      ...state,
      users: action.users,
    };
  })
  // on(addBlog, (state, action) => {
  //   const blog = { ...action.blog };
  //   return {
  //     Users: [...state.Users, blog],
  //   };
  // }),
  // on(updateBlog, (state, action) => {
  //   const blog = { ...action.blog };
  //   const updateBlogId = blog.id;

  //   let Users = state.Users.map((data) => {
  //     if (data.id === updateBlogId) data = blog;
  //     return data;
  //   });

  //   return {
  //     Users: [...Users],
  //   };
  // }),
  // on(deleteBlog, (state, action) => {
  //   const blogDelete = { ...action.blogDelete };
  //   const filteredUsers = state.Users.filter((blog) => blog.id !== blogDelete.id);
  //   const Users = filteredUsers;
  //   return {
  //     Users: [...Users],
  //   };
  // })
);
