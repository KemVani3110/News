
// import { CounterState } from './../states/counter.state';
import { createReducer, on } from "@ngrx/store";
import * as NewsActions from '../actions//counter.action'
import { NewsState } from "./../states/counter.state";

// const initialState: CounterState = { count : 0};
// export const counterReducer = createReducer(

//   initialState,
//   on(CounterActions.increase, (state) => ({
//     ...state, count: state.count + 1
//   })),

//   on(CounterActions.decrease, (state) => ({
//     ...state, count: state.count - 1
//   })),

//   on(CounterActions.reset, (state) => ({
//     ...state, count: 0
//   })),
// );

const initialState : NewsState = {
  news: [],
  numberOfNews: 0,
  loading : false,
  error: '',
  isSuccess: true,
};

export const newsReducer = createReducer(

     initialState,
    on(NewsActions.getPaginate, (state) => {
      return {...state, loading: true}
    }),

    on(NewsActions.getNewsSuccess,(state, action) => {
      return {...state, news : action.news, loading : false , isSuccess : true , numberOfNews : action.news.length}
    }),

    on(NewsActions.getNewsFailur, (state, action) => {
      return {...state, error : action.error, loading : false , isSuccess : false}
    })
);
