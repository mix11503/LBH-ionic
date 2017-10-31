import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ConnectionProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ConnectionProvider {

  severPathAPI : string;

  constructor(public http: Http) {
    this.severPathAPI ='http://52.220.19.105:8080/LibraryHouzeAdmin-M/API';
  }

}
