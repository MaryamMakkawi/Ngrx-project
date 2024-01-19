import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IBlogs } from './blog.interface';

const getBlogsState = createFeatureSelector<IBlogs>('blogs'); //define full model

export const blogsSelect = createSelector(getBlogsState, (state) => {
  return state;
}); //define part of model
