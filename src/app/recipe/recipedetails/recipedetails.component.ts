import { Component, OnInit, Input } from '@angular/core';
import { MRecipe } from '../recipe-model';

@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.component.html',
  styleUrls: ['./recipedetails.component.css']
})
export class RecipedetailsComponent implements OnInit {
  @Input() recipes:MRecipe;
  constructor() { }

  ngOnInit() {
  }

}
