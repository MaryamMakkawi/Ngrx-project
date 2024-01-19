import { createAction, props } from '@ngrx/store';
import { IBlogState } from './blog.interface';

export const loadBlogs = createAction('loadBlogs');
export const addBlog = createAction('addBlog', props<{ blog: IBlogState }>());
export const updateBlog = createAction(
  'updateBlog',
  props<{ blog: IBlogState }>()
);
export const deleteBlog = createAction(
  'deleteBlog',
  props<{ blogDelete: IBlogState }>()
);
