import { ICounterState } from 'src/app/components/arithmetic-method/store/counter/model.interface';
import {  IBlogs } from 'src/app/components/blog/store/blogs/blog.interface';

export interface IAppState {
  counter: ICounterState;
  blogs: IBlogs
}
