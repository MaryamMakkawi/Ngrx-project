import { createReducer, on } from '@ngrx/store';
import { initStore } from './counter.state';
import { actionMethod } from './counter.action';
let value: number;
export const counterReducer = createReducer(
  initStore,
  on(actionMethod, (state, actionMethod) => {
    switch (actionMethod.method) {
      case 'add':
        value = state.counter + actionMethod.value;
        break;
      case 'remove':
        value = state.counter - actionMethod.value;
        break;
      default:
        value = 0;
        break;
    }
    return {
      ...state,
      counter: value,
    };
  })
);
