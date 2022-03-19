const API= 'https://api.themoviedb.org/3/discover/movie?short:by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMG = 'https://image.tmdb.org/t/p/w1280/';
const SEARCH = 'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

const form = document.getElementById('form');
const search = document.getElementById("search");
const mov = document.querySelector('section.movies .container');

getMovies(API);

async function getMovies(url){
    const response = await fetch(url);
    const responsData = await response.json();
    console.log(responsData.results);
    showMovies(responsData.results);
}


function showMovies(movies){

    mov.innerHTML='';

    movies.forEach((element) => {

        const movie = document.createElement("div");
        movie.classList.add("movie");
    
        movie.innerHTML=` 
            <img src="${IMG +element.poster_path}" alt="">
            <div class="info">
                <h4>${element.title}</h4>
                <span>${element.vote_average}</span>
            </div>
            <div class="over">
                <p>${element.overview}</p>
            </div>
        `;
            mov.appendChild(movie);
       });
}

form.addEventListener('submit', e=>{
    e.preventDefault();

    const src = search.value;

    if(src){

        getMovies(SEARCH + search.value);

        search.value = ''
    }
})


let menu = document.getElementById('menu');
let menuContent = document.querySelector('nav .container ul');
let close = document.getElementById('close');

menu.addEventListener('click', ()=>{
    menuContent.style.display = 'block';
    menu.style.display = 'none';
    close.style.display = 'block';
})

close.addEventListener('click', ()=>{
    menuContent.style.display = 'none';
    menu.style.display = 'block';
    close.style.display = 'none';
})
