import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'product page',
  templateUrl: '../products/products.component.html',
  styleUrls: [ '../products/products.component.css' ]
})
export class ProductComponent {
  public selectedItem:string=""

  constructor(private dataService:DataService) { }

  onProductSubmit(formData:NgForm):void{
    this.dataService.setProductData(formData.value);
  }
}