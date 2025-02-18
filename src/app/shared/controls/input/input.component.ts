import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR,ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting:forwardRef(()=>InputComponent),
    multi:true
  }]
})
///trabajamos ocn controlvalue accesor
export class InputComponent implements OnInit, ControlValueAccessor {

  @Input() placeholder:string ='';
  @Output() changed = new EventEmitter<string>();

  value:string='';
  isDisabled:boolean=false;

  constructor() { }

  private propagateChange:any=()=>{};
  private propagateTouched:any=()=>{};

  writeValue(value: any): void {
    this.value=value;
  }
  registerOnChange(fn: any): void {
    this.propagateChange =fn;
  }
  registerOnTouched(fn: any): void {
    this.propagateTouched=fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled=isDisabled;
  }

  onKeyup(event: Event){
    const {target} = event;
    this.value=(target as HTMLInputElement).value;
    this.propagateChange(this.value);
    this.changed.emit(this.value);
  }

  onBlur(): void{
    this.propagateTouched();
  }

  ngOnInit(): void {
  }

}
