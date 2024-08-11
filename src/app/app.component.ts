import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cocktail, ingredient } from 'src/core/cocktail.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cocktails';
  public Cocktails: Cocktail[] = [];
  constructor(private http: HttpClient){

    //option 1: https://opentdb.com/api.php?amount=10&category=17&difficulty=easy - create a game
    //option 2: https://api.openbrewerydb.org/breweries - get a map and point to these brewries - expensive
    //option 3: https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita - cocktail recepies
    //option 4: https://jobicy.com/api/v2/remote-jobs?count=20&geo=usa&industry=marketing&tag=seo - list of remote jobs - done somehow
    //option 5: https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2023-01 - uk crime and police data
  }
  ngOnInit(): void {
    this.http.get<any>('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita').subscribe((response : any) => {
      // console.log(response.jobs.map((x: Job) => x.salaryCurrency));
      response.drinks.forEach((drink: any) => this.handleDrinksApi(drink))
      console.log(response.drinks);
    });
    console.log(this.Cocktails)
  }

  private handleDrinksApi(drink: any): void {
    let x: ingredient[] = [
      {
        ingredient:drink.strIngredient1,
        measure: drink.strMeasure1, 
      },
      {
        ingredient:drink.strIngredient2,
        measure: drink.strMeasure2, 
      },
      {
        ingredient:drink.strIngredient3,
        measure: drink.strMeasure3, 
      },
      {
        ingredient:drink.strIngredient4,
        measure: drink.strMeasure4, 
      },
      {
        ingredient:drink.strIngredient5,
        measure: drink.strMeasure5, 
      },
      {
        ingredient:drink.strIngredient6,
        measure: drink.strMeasure6, 
      },
      {
        ingredient:drink.strIngredient7,
        measure: drink.strMeasure7, 
      }
    ];
    let cocktail: Cocktail = {
      drinkName: drink.strDrink,
      drinkImage: drink.strDrinkThumb,
      instructionsEn: drink.strInstructions,
      instructionsDE: drink.strInstructionsDE,
      instructionsIT: drink.strInstructionsIT,
      drinkIngredients: x
    }
    this.Cocktails.push(cocktail);
  }
  
}
