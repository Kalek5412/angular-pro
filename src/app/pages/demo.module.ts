import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo/demo.component';



@NgModule({
  declarations: [
    DemoComponent,

  ],
  imports: [
    CommonModule,
    DemoRoutingModule
  ],
  exports:[
    DemoComponent,
  ]
})
export class DemoModule { }
