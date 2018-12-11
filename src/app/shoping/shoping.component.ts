import { Component, OnInit } from '@angular/core';
import { MIngredients } from '../shared/ingredients';

@Component({
  selector: 'app-shoping',
  templateUrl: './shoping.component.html',
  styleUrls: ['./shoping.component.css']
})
export class ShopingComponent implements OnInit {
  ingredients:MIngredients[] =[
    new MIngredients("apples",5),
    new MIngredients("Tomatos",15),
  ];
  constructor() { }

  ngOnInit() {
  }
  newIngAdded(ingredients: MIngredients){
    this.ingredients.push(ingredients);
  }
}
