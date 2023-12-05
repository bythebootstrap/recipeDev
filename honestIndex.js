const fs = require('fs')
var recipesIndex = []

// Create array of file names
var filesArray = []

// Loop over array and read files, adding data to recipesIndex
filesArray.foreach((item) => {
    var itemContents = JSON.parse(item);
    var toAdd = {...itemContents.title, ...itemContents.slug, ...itemContents.category};
    recipesIndex.push(toAdd)
});

// Write recipesIndex to recipes.json file