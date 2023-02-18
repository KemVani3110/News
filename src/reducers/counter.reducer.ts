import { CounterState } from './../states/counter.state';
import { createReducer, on } from "@ngrx/store";
import * as CounterActions from '../actions//counter.action'

const initialState: CounterState = { count : 0};
export const counterReducer = createReducer(

  initialState,
  on(CounterActions.increase, (state) => ({
    ...state, count: state.count + 1
  })),

  on(CounterActions.decrease, (state) => ({
    ...state, count: state.count - 1
  })),

  on(CounterActions.reset, (state) => ({
    ...state, count: 0
  })),
);
