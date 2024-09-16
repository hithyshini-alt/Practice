const ListContainer = document.getElementById('anime-list');
const search = document.getElementById('search-bar');
let all = [];


async function fetchAnimes() {
    const url ='https://api.jikan.moe/v4/anime'; 
    try {
        const response = await fetch(url);
        const data = await response.json();
        all = data.data;
        displayAnimes(data.data);
    } catch (error) {
        console.error("Error:", error);
    }
}

function displayAnimes(animes) {
    ListContainer.innerHTML = '';

    animes.forEach(anime => {
        const card = document.createElement('div');
        card.classList.add('anime-item');
        card.innerHTML = `
            <img src="${anime.images.jpg.image_url}" alt="anime">
            <div class="anime-title">Name : ${anime.title}</div>
            <div class="anime-rank">Rank : ${anime.rank} </div>
            <div class="anime-duration">Duration : ${anime.duration} </div>
        `;

        ListContainer.appendChild(card);
    });
}

function filterAnime(){
    const searchAnime = search.value.toLowerCase();
    const filteredAnimes = all.filter(anime =>
        anime.title.toLowerCase().includes(searchAnime)
    );
    displayAnimes(filteredAnimes);
}

document.addEventListener('DOMContentLoaded',()=>{
    fetchAnimes();
    document.getElementById('search-bar').addEventListener('input',filterAnime);
});



/*document.addEventListener('DOMContentLoaded', () => {

}
document.getElementById('movie-list');
const container = document.getElementById('movie-list');
container.innerHTML = '';
arrayListOfData.forEach(anime => {
const card = document.createElement('div');
card.innerHTML = `
<h1> Hey </h1>

`
container.appendChild(card);
searchBar.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();  
    const filteredAnimes = allAnimes.filter(anime => anime.title.toLowerCase().includes(searchTerm)); 
    displayAnimes(filteredAnimes); 
});*/