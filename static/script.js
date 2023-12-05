console.log(recipes);

function allRecipes(){
    let recipeDiv = document.getElementById('recipes')
    recipes.forEach((recipe) => {
        let listing = document.createElement('div')
        var categories = recipe.category.concat(', ')
        listing.innerHTML = `
            <a href="${recipe.slug}>${recipe.title}</a>
            <p>${categories}</p>
        `
        recipeDiv.append(listing)
    });
}