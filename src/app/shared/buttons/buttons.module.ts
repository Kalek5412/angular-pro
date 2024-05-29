import { ButtonModule } from './button/button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports:[
    ButtonModule
  ]
})
export class ButtonsModule { }
