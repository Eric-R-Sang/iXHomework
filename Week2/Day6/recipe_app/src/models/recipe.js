export class Recipe {
    ingredients = [];
    steps = [];
    
    constructor(name, duration, ingredients, steps) {
        this.name = name;
        this.duration = duration;
        this.ingredients = ingredients;
        this.steps = steps;
    }
}