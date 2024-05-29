import { Icon } from './../icon/Icon';
export type Value = number | string | boolean;

export interface ControlItem{
  value:Value;
  label:string;
  icon?: Icon;
}
