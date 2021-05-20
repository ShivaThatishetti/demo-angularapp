import { Injectable } from '@angular/core'
import {Products1} from './models/user.models'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { }

  getMobilesData1():Observable<Products1[]>
  {
    return this.hc.get<Products1[]>('http://localhost:3000/mobiles')
  }  
  getbikesdata():Observable<any>
  {
    return this.hc.get<any>('http://localhost:3000/Bikes')
  }
  getLaptopData():Observable<any>
  {
    return this.hc.get<any>('http://localhost:3000/Laptops')
  }  
}
