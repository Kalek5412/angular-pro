

export const markFormGroupTouched=(FormGroup:any)=>{
  (Object as any).values(FormGroup.controls).forEach((control:any) =>{
    control.markAsTouched();
    if(control.controls){
      markFormGroupTouched(control);
    }
  })
}
