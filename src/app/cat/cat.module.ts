import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatRoutingModule } from './cat-routing.module';
import { CatComponent } from './cat.component';
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [
    CatComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    CatRoutingModule
  ]
})
export class CatModule { }
