import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'user page',
  templateUrl: '../user details/user.component.html',
  styleUrls: [ '../user details/user.component.css' ]
})
export class UserComponent {
  public firstname:string=""
  public address:string=""
  public mobile:string=""
  public email:string=""
  public gender:string=""

  constructor(private dataService:DataService) { }

  onSubmit(formData:NgForm):void{
    this.dataService.setUserData(formData.value);
  }
}
