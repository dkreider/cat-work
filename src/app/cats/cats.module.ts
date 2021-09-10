import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatsRoutingModule } from './cats-routing.module';
import { CatsComponent } from './cats.component';
import { PipesModule } from '../shared/pipes/pipes.module';
import { StaredDirective } from './stared.directive';


@NgModule({
  declarations: [
    CatsComponent,
    StaredDirective    
  ],
  imports: [
    CommonModule,
    CatsRoutingModule,
    PipesModule
  ]
})
export class CatsModule { }
