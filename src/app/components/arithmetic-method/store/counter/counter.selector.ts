import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICounterState } from './model.interface';

const getCounterState = createFeatureSelector<ICounterState>('counter'); //define full model

export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter;
}); //define part of model
