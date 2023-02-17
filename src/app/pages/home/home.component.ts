import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/model/News.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor (private HttpService : HttpService) {

  }

  new$ = new Observable<News[]>();

  ngOnInit(): void {
    this.new$ = this.HttpService.get();
  }


}
