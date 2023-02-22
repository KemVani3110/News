import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/model/News.model';
import { NewsState } from 'src/ngrx/states/counter.state';
import * as NewsActions from '../../../ngrx/actions/counter.action'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  new$ = new Observable<NewsState>;
  CurrentPage = 1;
  constructor (private HttpService : HttpService , private store: Store<{news: NewsState}>) {
    this.new$ = this.store.select('news');
  }

  getNews(){
    return this.store.dispatch(NewsActions.getPaginate({page : 1 , per_page : 10}));
  }

  getNextPage()
  {
   this.CurrentPage = this.CurrentPage + 1;
   this.store.dispatch(NewsActions.getPaginate({page : this.CurrentPage , per_page : 10}));
  }

  getPreviousPage()
  {
    this.CurrentPage = this.CurrentPage - 1;
    this.store.dispatch(NewsActions.getPaginate({page : this.CurrentPage , per_page : 10}));
  }
  // new$ = new Observable<News[]>();

  ngOnInit(): void {
    // this.new$ = this.HttpService.get();
    //(new$|async)?.news!.length < 10
    this.getNews();
  }


}
