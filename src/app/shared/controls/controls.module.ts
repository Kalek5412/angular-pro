import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from './input/input.module';
import { FormFieldModule } from './form-field/form-field.module';
import { PasswordModule } from './password/password.module';
import { SelectModule } from './select/select.module';
import { MatSelectModule } from '@angular/material/select';
import { CheckboxesModule } from './checkboxes/checkboxes.module';
import { RadiosModule } from './radios/radios.module';
import { DateModule } from './date/date.module';
import { DateRangeModule } from './date-range/date-range.module';
import { AutocompleteModule } from './autocomplete/autocomplete.module';
import { SpinnerModule } from './indicators/spinner/spinner.module';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule,
    FormFieldModule,
    PasswordModule,
    SelectModule,
    CheckboxesModule,
    RadiosModule,
    DateModule,
    DateRangeModule,
    AutocompleteModule,
    MatSelectModule,

    SpinnerModule

  ],exports:[
    InputModule,
    FormFieldModule,
    PasswordModule,
    SelectModule,
    CheckboxesModule,
    RadiosModule,
    DateModule,
    DateRangeModule,
    AutocompleteModule,
    MatSelectModule,

    SpinnerModule
  ]
})
export class ControlsModule { }
