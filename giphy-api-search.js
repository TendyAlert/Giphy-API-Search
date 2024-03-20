let form = document.querySelector('.js-form');
let searchBar = document.querySelector('[name=keyword-search]');
let imageContainer = document.querySelector('.js-image-container');
let categories = null;

async function fetchGiphyAPI() {
    const giphyAPI = await fetch('https://api.giphy.com/v1/gifs/categories?api_key=r7HXE5xtCUkN9hMp8STRaDtUMOJcui2e')
    const response = await giphyAPI.json(); 
    categories = response.data;
    console.log(categories);
}



function keywordSearch(event) {
    event.preventDefault(); 
    console.log(searchBar.value);
}

form.addEventListener("submit", keywordSearch);