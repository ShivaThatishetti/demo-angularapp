import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Post} from './models/user.models'

@Injectable({
  providedIn: 'root'
})
export class FakeDataService {

  constructor(private hc:HttpClient) { }
  getposts():Observable<Post[]>
  {
    return this.hc.get<Post[]>('http://jsonplaceholder.typicode.com/posts')
  }
  getusers():Observable<any>
  {
    return this.hc.get<any>('https://reqres.in/api/unknown')
  }
  getUsers():Observable<any>
  {
    return this.hc.get<any>('http://jsonplaceholder.typicode.com/users')
  }
}
