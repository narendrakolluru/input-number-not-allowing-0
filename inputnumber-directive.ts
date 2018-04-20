
import {Directive, ElementRef, HostListener, Input, EventEmitter} from '@angular/core';
declare var require: any;

@Directive({
  selector: '[numberfield]',
})
export class NumberField {

  @HostListener('click', ['$event']) onClick() {
       if(window.event.srcElement.id == "increase") {
         var value = parseInt(document.getElementById('numberquantity').value, 10);

         value = isNaN(value) ? 0 : value;
         value++;
         document.getElementById('numberquantity').value = value;
       }
       if(window.event.srcElement.id == "decrease") {
         var value = document.getElementById('numberquantity').value;
         value = isNaN(value) ? 1 : value;
         value < 1 ? value = 1 : 1;
         value--;
         if(value > 0){
         document.getElementById('numberquantity').value = value;
          }


       }
  }

  @HostListener('input', ['$event']) input() {
    if(parseInt(document.getElementById('numberquantity').value, 10) < 1){
      document.getElementById('numberquantity').value = "";
    }
  }


  constructor() {

  }
}
