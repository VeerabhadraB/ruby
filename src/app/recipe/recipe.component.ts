import { Component, OnInit } from '@angular/core';
import { MRecipe } from './recipe-model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  selectedRecipe:MRecipe;
  constructor() { }

  ngOnInit() {
  }


}
