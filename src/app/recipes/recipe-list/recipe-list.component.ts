import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply test', 'https://s.wsj.net/public/resources/images/BN-ST114_STEAK0_P_20170331111315.jpg')
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
