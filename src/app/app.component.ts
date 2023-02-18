
import { Observable } from 'rxjs';
import { CounterState } from './../states/counter.state';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CounterActions from '../actions//counter.action'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'News';
  count$!: Observable<CounterState>;
  constructor(private store: Store<{count: CounterState}>){
    this.count$ = this.store.select('count');
  }



  increase(){
    this.store.dispatch(CounterActions.increase());
  }

  decrease(){
    this.store.dispatch(CounterActions.decrease());
  }

  reset()
  {
    this.store.dispatch(CounterActions.reset());
  }
}
