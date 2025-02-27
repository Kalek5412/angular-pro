import { Component, Input, OnInit, Output, forwardRef,EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR ,ControlValueAccessor} from '@angular/forms';
import { ControlItem,Value } from '@app/models/frontend/control-item/ControlItem';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss'],
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting:forwardRef(()=>CheckboxesComponent),
    multi:true
  }]
})
export class CheckboxesComponent implements OnInit, ControlValueAccessor{


  @Input() items!:ControlItem[];

  @Output() changed = new EventEmitter<Value[]>();

  value  !: Value[];
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

  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled=isDisabled;
  }

  ngOnInit(): void {
  }

  onChanged(value:Value, checked:Event): void{
    const {target} =checked;
    const resultado = (target as HTMLInputElement).checked;
    const selected = this.getSelected(value,resultado);
    this.value=selected;
    this.propagateChange(selected);
    this.changed.emit(selected);
  }
  //arreglo cheked selecionado
  private getSelected(value : Value, checked:boolean ): Value[]{
    const selected: Value[]=this.value ? [...this.value]:[];
    if(checked){
      if(!selected.includes(value)){
        selected.push(value);
      }
    }else{
      const index = selected.indexOf(value);
      selected.splice(index,1);
    }
    return selected.length ? selected :[];
  }

  isChecked(value:Value):boolean{
    return this.value && this.value.includes(value);

  }

}
