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
  //to edit mobile data
  updateMobileData(mobileobj)
  {
    return this.hc.put('http://localhost:3000/Mobiles/'+mobileobj.id,mobileobj)
  }
  //to delete mobiles
  deleteMobiledata(id)
  {
    return this.hc.delete('http://localhost:3000/Mobiles/'+id)
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
