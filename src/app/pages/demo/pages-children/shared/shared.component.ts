import { markFormGroupTouched } from './../../../../utils/form';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regex, regexErrors } from '@app/utils/regex';
import { ControlItem } from '@app/models/frontend/control-item/ControlItem';
import { NotificationService } from '@app/services/notification/notification.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {
  form!: FormGroup;
  isInline!: boolean;
  regexErrors = regexErrors;
  items !:ControlItem[];
  showSpinner=false;

  constructor(private fb: FormBuilder,private _notification:NotificationService) {
    this.isInline=true;
    this.items =[
      {label:'uno',value:1},
      {label:'dos',value:2},
      {label:'tres',value:3},
      {label:'cuatro',value:4},
      {label:'cinco',value:5},
      {label:'seis',value:6},
    ]
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [
        null,
        {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(regex.email),
          ],
        },
      ],
      password: [
        null,
        {
          updateOn: 'blur',
          validators: [
            Validators.required
          ],
        },
      ],
      autocomplete: [
        null,
        {
          updateOn: 'blur',
          validators: [
            Validators.required
          ],
        },
      ],
      select:[
        null,{
          updateOn:'change',validators:[
            Validators.required
          ]
        }
      ],
      checkboxes:[
        null,{
          updateOn:'change',validators:[
            Validators.required
          ]
        }
      ],
      radios:[
        null,{
          updateOn:'change',validators:[
            Validators.required
          ]
        }
      ],
      date:[
        null,{
          updateOn:'change',validators:[
            Validators.required
          ]
        }
      ],
      dateRange:[
        null,{
          updateOn:'change',validators:[
            Validators.required
          ]
        }
      ],
    });
  }

  onPatchValue(): void {
    this.form?.patchValue({
      input: 'alejandrolujanllauri@email.com',
      password:'kurono',
      autocomplete:1,
      select:2,
      checkboxes:[3],
      radios:4,
      date: new Date().getTime(),
      dateRange:{
        from:new Date(2022,5,10).getTime(),
        to:new Date(2022,11,10).getTime(),
      }
    });
  }

  onSubmit(): void {
    console.log('presiono');
    if(!this.form.valid){
      markFormGroupTouched(this.form)
    }
  }

  organizarElemento() {
    this.isInline = !this.isInline;
  }

  onToggleDisable(): void{
    if(this.form.enabled){
      this.form.disable();
    }else{
      this.form.enable();
    }
  }

  onToggleSpinner():void{
    this.showSpinner=!this.showSpinner;
  }
  onError():void{
    this._notification.error("el procedimiento hay error");

  }
  onSuccess():void{
    this._notification.success("el procedimiento fue exitoso");
  }
}
