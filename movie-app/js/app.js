
const movieBox = document.querySelector('#movie-box');
const loader = document.querySelector('.loader');
const apiUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const imgPath = "https://image.tmdb.org/t/p/w1280";
const searchApi = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const getMovies = async (api) => {
showLoader(); 
const response = await fetch(api);
const data = await response.json();
hideLoaderAfterDelay();
if (data.results && data.results.length > 0) {
  showMovies(data.results);
} else {
  showNoResultsMessage();
}

}

const showLoader = () => {
loader.style.display = 'block';

}

const hideLoader = () => {
loader.style.display = 'none';
}

const hideLoaderAfterDelay = () => {
setTimeout(() => {
  hideLoader();
 
}, 500); 
}

const showMovies = (data) => {

movieBox.innerHTML = "";
data.forEach(item => {
  const imagePath = item.poster_path == null ? "image/no-image.jpg" : imgPath + item.poster_path;
  const box = document.createElement('div');
  box.classList.add('box');
  box.innerHTML = `
      <img src="${imagePath}" alt="" />
      <div class="overlay">
          <div class="title"> 
              <h2>${item.original_title}</h2>
              <span>${item.vote_average}</span>
          </div>
          <h3>Overview:</h3>
          <p>${item.overview}</p>
      </div>
  `;
  movieBox.appendChild(box);
});
}
const showNoResultsMessage = () => {
  movieBox.innerHTML = `<div class="no-results">No results found.</div>`;
}
document.querySelector('.search').addEventListener('keyup', (event) => {
      
if (event.target.value.trim() !== "") {
  getMovies(searchApi + event.target.value);
  
} 
else {
  getMovies(apiUrl);
}
});

getMovies(apiUrl);

