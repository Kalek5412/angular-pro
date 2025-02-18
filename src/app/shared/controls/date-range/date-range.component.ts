import { Component, Input, OnInit, Output, forwardRef,EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR ,ControlValueAccessor,FormBuilder,FormGroup} from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';


export interface Value{
  from: number;
  to:number;
}

export interface Placeholder{
  from: string;
  to:string;
}

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss'],
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting:forwardRef(()=>DateRangeComponent),
    multi:true
  }]
})
export class DateRangeComponent implements OnInit,ControlValueAccessor {

  @Input() placeholder!:Placeholder;
  @Output() changed = new EventEmitter<Value>();

  form !: FormGroup;

  value  !: Value;
  isDisabled !: boolean;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      from:[null],
      to:[null]
    })
  }

  get min(): Date{
    const from = this.form.controls.from.value;
    return from ? new Date(from) : new Date()
  }

  get max(): Date{
    const to = this.form.controls.to.value;
    return to ? new Date(to) : new Date()
  }

  private propagateChange:any=()=>{};
  private propagateTouched:any=()=>{};

  writeValue(value: any): void {
    this.form.patchValue( value || {});
  }
  registerOnChange(fn: any): void {
    this.propagateChange=fn;
  }
  registerOnTouched(fn: any): void {
   this.propagateTouched=fn;
  }
  setDisabledState(isDisabled: boolean): void {
    if(isDisabled){
      this.form.disable();
    }else{
      this.form.enable();
    }
  }

  onChanged():void{
    const value = {...this.form.value};
    this.propagateChange(value);
    this.changed.emit(value);
  }

  onClosed():void{
    this.propagateTouched();
  }


}
