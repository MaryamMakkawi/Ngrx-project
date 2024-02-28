import { createAction, props } from '@ngrx/store';
import { IBlogState } from './blog.interface';

export const loadBlogs = createAction('[Blog] Load');
export const addBlog = createAction(
  '[Blog] Add',
  props<{ blog: IBlogState }>()
);
export const updateBlog = createAction(
  '[Blog] Update',
  props<{ blog: IBlogState }>()
);
export const deleteBlog = createAction(
  '[Blog] delete',
  props<{ blogDelete: IBlogState }>()
);
