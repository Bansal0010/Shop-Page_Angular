import {Injectable} from '@angular/core';

@Injectable({
  providedIn:'root'
})

export class DataService{
  public userData={};
  public productData={};
  constructor() { }

  setUserData(data: {}){
    this.userData=data;
  }

  setProductData(data: {}){
    this.productData=data;
  }
}