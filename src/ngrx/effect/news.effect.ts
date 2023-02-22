import { News } from '../../app/model/News.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as NewsActions from '../actions//counter.action'
import { catchError,  map, of, switchMap } from "rxjs";

@Injectable()
export class NewsEffect{
  constructor(private action$ : Actions, private HttpClient: HttpClient){}

  getNews = createEffect(() => this.action$.pipe(
    ofType(NewsActions.getPaginate) ,

    switchMap((action) => {
      return this.HttpClient.get(`https://social.runwayclub.dev/api/articles/latest?page=${action.page}&per_page=${action.per_page}`)
    }),
    map((response) => {
      return NewsActions.getNewsSuccess({news : <Array<News>> response})
    }),
    catchError((error : any) => of(NewsActions.getNewsFailur({error : error})))
  ));
}
