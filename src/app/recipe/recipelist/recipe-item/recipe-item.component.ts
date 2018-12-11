import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MRecipe } from '../../recipe-model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe: MRecipe;
@Output() recipeSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onSelectedItem(){
    this.recipeSelected.emit()
  }
}
