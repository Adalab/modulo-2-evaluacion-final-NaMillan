'use strict';

const search = document.querySelector('.js-seacher');
const btnSearch = document.querySelector('.js-button-search');
const btnReset = document.querySelector('.js-button-reset');
const listResult= document.querySelector('.js-container');
//const listTitleResult= document.querySelector('.js-title-img');
//const listImgFavorites= document.querySelector('.js-img-favorites');
//const listTitleResultFavorites= document.querySelector('.js-title-img-favorite');

let titleslist = [];
let initialUrl='https://api.jikan.moe/v4/anime?q='
let url = initialUrl + 'naruto';

function getDataApi (){
    fetch (url)
    .then ((response => response.json()))
    .then ((data) =>{
    titleslist=data.data;
    console.log (titleslist);
    renderTitles (titleslist);
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

const renderTitles = (titleslist) => {
    listResult.innerHTML = '';
    titleslist.forEach((title) => {
        const titleContainer = document.createElement('div');
        const imgElement = document.createElement('img');
        const titleElement = document.createElement('h3');
        
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
};

