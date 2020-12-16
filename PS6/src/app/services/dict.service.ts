import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictService {

  constructor(private http: HttpClient ) { }

  // if you run using a browser that negates cors then it works
  getDef(input: string): Observable<any>{
    return this.http.post('http://localhost:3000/PS4', {input}, {responseType: 'json'});
  }
}
