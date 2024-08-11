import { Component, Input } from '@angular/core';
import { Cocktail } from 'src/core/cocktail.interface';

@Component({
  selector: 'app-cocktail-recipe',
  templateUrl: './cocktail-recipe.component.html',
  styleUrls: ['./cocktail-recipe.component.scss']
})
export class CocktailRecipeComponent {
  @Input() cocktail: Cocktail;

}
