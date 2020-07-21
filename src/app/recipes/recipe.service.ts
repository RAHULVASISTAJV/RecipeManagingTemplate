import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Gobi Manchurian',
      'Chinese food exclusive',
      'https://theyummydelights.com/wp-content/uploads/2020/02/gobi-manchurian-8.jpg',
      [
        new Ingredient('Batter', 1),
        new Ingredient('Vegetables', 20)
      ]),
    new Recipe('Masala Dosa',
      'Karnataka traditional food',
      'https://files2.hungryforever.com/wp-content/uploads/2015/04/Featured-image-masala-dosa-recipe.jpg',
      [
        new Ingredient('Batter', 2),
        new Ingredient('Vegetables', 5)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
