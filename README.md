# Giphy-API-search
# Name
    Isaac Elam Wennekamp

# Overview
    This is a website made to recieve user input and use the GIPHY API Search Endpoint to find relevant images.
    Powered by GIPHY

# How to use
    Type in query in the search box.
    Enter number of desired gifs in second box.
    Pres the search button and see your results.

# Technologies used
    HTML
    CSS
    JavaScript
    Draw.io

# Future improvement
    Add categories and first gif under each category then have a click event on that category lead to more gifs in that
    category.
    Add a donwload option to the gifs.
    Have a dropdown with categories in it.


# Code for future use
    /*function displayCategories() {
        if (categories === null) {
            return;
        }
        imageContainer.innerHTML = categories.map(name => renderCategory(name)).join('');
    }*/

    /* TODO for future self challenge not required for project
    async function fetchGiphyAPI() {
        const giphyAPI = await fetch('https://api.giphy.com/v1/gifs/categories?api_key=r7HXE5xtCUkN9hMp8STRaDtUMOJcui2e')
        const response = await giphyAPI.json();
        categories = response.data;
        return categories;
    } */