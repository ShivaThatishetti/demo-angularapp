import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeDataService } from '../fake-data.service';

@Component({
  selector: 'app-telivision-details',
  templateUrl: './telivision-details.component.html',
  styleUrls: ['./telivision-details.component.css']
})
export class TelivisionDetailsComponent implements OnInit {

  constructor(private ar:ActivatedRoute,private fs:FakeDataService) { }
  user:any
  ngOnInit(): void {
    let id=this.ar.snapshot.params.id
    this.fs.getpostsbyid(id).subscribe(obj=>{this.user=obj;console.log(this.user)},err=>{console.log('ERROR',err)})
  }

}
