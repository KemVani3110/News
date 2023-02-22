
import { Observable } from 'rxjs';
import { NewsState } from './../ngrx/states/counter.state';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'News';
  // new$!: Observable<NewsState>;
  new$ = new Observable<NewsState>;
  constructor(private store: Store<{news: NewsState}>){
    this.new$ = this.store.select('news');
  }

  // getNews(){
  //   this.store.dispatch(CounterActions.getNews());
  // }

  // increase(){
  //   this.store.dispatch(CounterActions.increase());
  // }

  // decrease(){
  //   this.store.dispatch(CounterActions.decrease());
  // }

  // reset()
  // {
  //   this.store.dispatch(CounterActions.reset());
  // }
}
