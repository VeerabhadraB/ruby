import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MRecipe } from '../recipe-model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
@Output() selectedRecipe = new EventEmitter<MRecipe>();
recipes: MRecipe[] = [
  new MRecipe("A test Recipe","Simple Recipe","../../../assets/images/iot-bg.jpg"),
];
  constructor() { }

  ngOnInit() {
  }
  getSelectedRecipe(recipe:MRecipe){
    this.selectedRecipe.emit(recipe);
  }
}
