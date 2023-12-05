console.log(recipes);

function ifArray(array, string){
    if(Array.isArray(array)){
        string = array.join(', '); 
    } else {string = array}
    return(string)
}

function allRecipes(){
    let indexDiv = document.getElementById('recipes')
    recipes.forEach((recipe) => {
        let listing = document.createElement('div');
        let categories = ifArray(recipe.category);
        listing.setAttribute('class', 'listing');
        listing.innerHTML = `<a href="/static/recipe.html?id=${recipe.slug}">${recipe.title}</a><p>${categories}</p>`
        indexDiv.append(listing)
    });
}

function oneRecipe(){
    fetch(`recipes/${params.id}.json`)
    .then(response => {
       return response.json();
    })
    .then(data => {
        document.title = data.title;
        recipeDiv = document.getElementById('recipe');
        let recipeHeader = document.createElement('section')
        recipeHeader.setAttribute('id', 'recipe-header')
        recipeHeader.innerHTML = `<h1>${data.title}</h1><p>${ifArray(data.category)}</p>`
        recipeDiv.prepend(recipeHeader);
        let ingredientsList = document.createElement('ul')
        data.ingredients.forEach((ingredient) => {
            let li = document.createElement('li');
            li.innerHTML = ingredient;
            ingredientsList.append(li);
        })
        ingredients = document.getElementById('ingredients')
        ingredients.append(ingredientsList);
        let directionsDiv = document.getElementById('directions')
        let directions = document.createElement('p');
        directions.innerHTML = data.directions;
        directionsDiv.append(directions);
    });
}