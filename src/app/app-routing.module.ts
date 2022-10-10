import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { UserComponent } from './user details/user.component';
import { ProductComponent } from './products/products.component';
import {SummaryComponent} from './summary/summary.component';

const routes:Routes=[{path:'user',component:UserComponent},{path:'products',component:ProductComponent},{path:'summary',component:SummaryComponent}]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}