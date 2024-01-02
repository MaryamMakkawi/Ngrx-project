import { createAction, props } from '@ngrx/store';

export const actionMethod = createAction(
  'actionMethod',
  props<{ value: number; method: string }>()
);
