import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'something';
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
      console.log(response.drinks);
    });
  }
  
}
