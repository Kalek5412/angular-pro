import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { ButtonsModule } from '@app/shared/buttons/buttons.module';
import { ControlsModule } from '@app/shared/controls/controls.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ButtonsModule,
    ControlsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
