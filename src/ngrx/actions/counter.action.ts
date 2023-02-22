import { createAction, props } from "@ngrx/store";
import { News } from "src/app/model/News.model";

// export const increase = createAction('[Counter] Increase');
// export const decrease = createAction('[Counter] Decrease');
// export const reset = createAction('[Counter] Reset');

// export const getNews = createAction('[News] getNews');

export const getPaginate = createAction('[News] getpreginate', props<{page : number, per_page : number}>());
export const getNewsSuccess = createAction('[News] get News Success', props<{news : News[]}>());
export const getNewsFailur = createAction('[News] get News Failur', props<{error : string}>());
