import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'summary page',
  templateUrl: '../summary/summary.component.html',
  styleUrls: [ '../summary/summary.component.css' ]
})
export class SummaryComponent implements OnInit{
  public userData:{[key:string]:string}={};
  public productData:{[key:string]:string}={};

  constructor(private dataService:DataService) { }

  ngOnInit(): void{
    this.userData=this.dataService.userData;
    this.productData=this.dataService.productData;
  }
}