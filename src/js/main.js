'use strict';

const search = document.querySelector('.js-seacher');
const btnSearch = document.querySelector('.js-button-search');
const btnReset = document.querySelector('.js-button-reset');
const listResult= document.querySelector('.js-container');
const listFavorites= document.querySelector('.js-container-fav');



let titlesList = [];
let initialUrl='https://api.jikan.moe/v4/anime?q='
let url = initialUrl + 'naruto';
let favoritesTitles = [];

function getDataApi (){
    fetch (url)
    .then ((response => response.json()))
    .then ((data) =>{
    titlesList=data.data;
    renderTitles (titlesList);
    renderFavorites(favoritesTitles);
    });
}
//getDataApi();

const handleInput = (event) => {
    event.preventDefault();
    const valueInput = search.value.toLowerCase().replace(/\s+/g, '-');
    url = initialUrl + valueInput;
    console.log(url);
   getDataApi();
};

btnSearch.addEventListener('click', handleInput);


const renderTitles = (titlesList) => {
    listResult.innerHTML = '';
  
        titlesList.forEach((title) => {
        const titleContainer = document.createElement('div');
        const imgElement = document.createElement('img');
        const titleElement = document.createElement('h3');
        
        titleContainer.classList.add('js-title-selected');
        titleContainer.id = `${title.mal_id}`;

        if (title.images.jpg.image_url !== '') {
        imgElement.src = title.images.jpg.image_url;
        } else {
        imgElement.src = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
    }

        titleElement.textContent = title.title;   

        titleContainer.appendChild(imgElement);
        titleContainer.appendChild(titleElement);

        listResult.appendChild(titleContainer);
    });
    listenerTitles();
};

function handleAddFavorite(event) {
    const clickedTitleId = parseInt(event.currentTarget.id);
    const foundTitle = titlesList.find(title => title.mal_id === parseInt(clickedTitleId));
    const indexTitleFav=favoritesTitles.findIndex((title) => title.mal_id === clickedTitleId);
     if (indexTitleFav === -1){
        favoritesTitles.push(foundTitle); 
      
    }
    renderFavorites(favoritesTitles);
}

function listenerTitles(){
    const allTitles = document.querySelectorAll('.js-title-selected');

    for (const oneTitle of allTitles){
        oneTitle.addEventListener('click', handleAddFavorite);

    }
}

function renderFavorites(favoritesTitles) {
    listFavorites.innerHTML = '';
    favoritesTitles.forEach((favorite) => {
        const favoriteContainer = document.createElement('div');
        const imgElement = document.createElement('img');
        const titleElement = document.createElement('h3');


        if (favorite.images.jpg.image_url !== '') {
            imgElement.src = favorite.images.jpg.image_url;
            } else {
            imgElement.src = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
        }

        favoriteContainer.classList.add('js-favorite-selected');
        favoriteContainer.id = `${favorite.mal_id}`;

        favoriteContainer.appendChild(imgElement);
        favoriteContainer.appendChild(titleElement);

        listFavorites.appendChild(favoriteContainer);
    });
}
