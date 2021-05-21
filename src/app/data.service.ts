import { Injectable } from '@angular/core'
import {mobiles, Products1} from './models/user.models'
import {HttpClient} from '@angular/common/http'
import {Observable,observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { }

  //to read all mobiles data
  getMobilesData1():Observable<any>
  {
    return this.hc.get<any>('http://localhost:3000/Mobiles')
  }  
  // to save new mobile data
  createNewMobile(mobileobj):Observable<any>
  {
    return this.hc.post('http://localhost:3000/Mobiles',mobileobj)
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
