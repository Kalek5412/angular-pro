import { Component, Input, OnInit, Output, forwardRef,EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR ,ControlValueAccessor} from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { ControlItem,Value } from '@app/models/frontend/control-item/ControlItem';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting:forwardRef(()=>SelectComponent),
    multi:true
  }]
})
export class SelectComponent implements OnInit,ControlValueAccessor {

  @Input() items!:ControlItem[];
  @Input() placeholder!:string;
  @Output() changed = new EventEmitter<Value>();

  value  !: Value;
  isDisabled !: boolean;

  constructor() { }

  private propagateChange:any=()=>{};
  private propagateTouched:any=()=>{};

   writeValue(value: any): void {
    this.value=value;
  }
  registerOnChange(fn: any): void {
    this.propagateChange=fn;
  }
  registerOnTouched(fn: any): void {
   this.propagateTouched=fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled=isDisabled;
  }

  onChanged(event: MatSelectChange):void{
    const value = event.value ? event.value : null;
    this.value=value;
    this.propagateChange(value);
    this.changed.emit(value);
  }

  onBlur(): void{
    this.propagateTouched();
  }
  ngOnInit(): void {
  }

}
