let form = document.querySelector('.js-form');
let searchBar = document.querySelector('[name=keyword-search]');
let imageContainer = document.querySelector('.js-image-container');



function keywordSearch(event) {
    event.preventDefault(); 
    console.log(searchBar.value);
}

form.addEventListener("submit", keywordSearch);