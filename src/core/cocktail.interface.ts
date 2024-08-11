export interface Cocktail {
    drinkName: string;
    drinkImage: string;
    drinkIngredients: ingredient[];
    instructionsEn: string;
    instructionsDE: string;
    instructionsIT: string;
}

export interface ingredient {
    ingredient: string;
    measure: string;
}