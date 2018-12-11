import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

import { MIngredients } from 'src/app/shared/ingredients';

@Component({
  selector: 'app-shopinglistedit',
  templateUrl: './shopinglistedit.component.html',
  styleUrls: ['./shopinglistedit.component.css']
})
export class ShopinglisteditComponent implements OnInit {
   @ViewChild('ingName') ingNameElementRef:ElementRef;
   @ViewChild('ingAmount') ingAmtElementRef:ElementRef;
   @Output('ingredientAdded') ingredientEmit = new EventEmitter<MIngredients>();
  constructor() { }
  ngOnInit() {
  }
  onAdded(){
    const ingName = this.ingNameElementRef.nativeElement.value;
    const ingAmt = this.ingAmtElementRef.nativeElement.value;
    const newIngredient = new MIngredients(ingName,ingAmt);
    this.ingredientEmit.emit(newIngredient);
  }
  onDelete(){

  }
  onclear(){

  }
}
