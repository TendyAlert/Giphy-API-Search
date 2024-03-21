const form = document.querySelector('.js-form');
const searchBar = document.querySelector('[name=keyword-search]');
const numberBar = document.querySelector('[name=gif-limit]');
const imageContainer = document.querySelector('.js-image-container');
let categories = null;


/* TODO for future self challenge not required for project
async function fetchGiphyAPI() {
    const giphyAPI = await fetch('https://api.giphy.com/v1/gifs/categories?api_key=r7HXE5xtCUkN9hMp8STRaDtUMOJcui2e')
    const response = await giphyAPI.json();
    categories = response.data;
    return categories;
} */


// Uses giphy search api key to search giphy library and sends results to render function
async function giphySearchAPI(search, number) {
    const searchAPI = await fetch(`
    https://api.giphy.com/v1/gifs/search?api_key=r7HXE5xtCUkN9hMp8STRaDtUMOJcui2e&q=${search}&limit=${number}&offset=0&rating=pg-13&lang=en&bundle=messaging_non_clips`);
    const response = await searchAPI.json();
    categories = response.data;
    let html = '';
    imageContainer.innerHTML = categories.map(category => renderCategory(category)).join('');

}

function renderCategory(category) {
    return `
        <div class='category-item'>
        <img src="${category.images.original.url}" alt="${category.title}">
        </div> 
    `;
}

/*function displayCategories() {
    if (categories === null) {
        return;
    }
    imageContainer.innerHTML = categories.map(name => renderCategory(name)).join('');
}*/

// Sends form values to search function
function keywordSearch(event) {
    event.preventDefault();
    giphySearchAPI(searchBar.value, numberBar.value);
}

// Catches submit from form
form.addEventListener("submit", keywordSearch);
