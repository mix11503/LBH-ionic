import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConnectionProvider } from '../connection/connection';
import { Observable } from 'rxjs' ;

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
export class News {
  news_id: number;
  news_topic: string;
  news_desc: string;
  start_date: string;
  end_date: string;
  cate: string;
  hidden: boolean;
  roomTag: number;
}

@Injectable()
export class NewsProvider {

  newsList: News[] = [];

  constructor(public http: Http, public conn: ConnectionProvider) {
    
  }

  loadNews(): Observable<News[]>{
    return this.http.get(this.conn.severPathAPI).map(res => res.json());
  }

}
