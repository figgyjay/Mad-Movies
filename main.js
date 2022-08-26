const myApi = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8dd1caa1528a360e353c7bc020d83326&page=1';

const imagePath = 'https://image.tmdb.org/t/p/w1280'

const searchPath = 'https://api.themoviedb.org/3/search/movie?api_key=8dd1caa1528a360e353c7bc020d83326&query="8dd1caa1528a360e353c7bc020d83326&query="';

//URL's above are from the API I'm using

const genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ];
//I copied list of genres from API
//console.log(genres);



const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const tagsEl = document.getElementById('tags');

function createGenres(){
    tagsEl.innerHTML = '';
    genres.forEach(genres => {
        
    })

}

getMovies(myApi)

async function getMovies(url){
    const res = await fetch(url);
    const data = await res.json()

    //console.log('movies', data.results);

    showMovie(data.results);
    
}
//console.log(getMovies(myApi))

function showMovie(movies){
    main.innerHTML = '';

        movies.forEach(movie => {

        const { title, poster_path, vote_average, overview } = movie;


        const movieElement = document.createElement('div')
        movieElement.classList.add('movie');

       
        movieElement.innerHTML = //`<h1>${title}</h1> used this to test if my code was working`
        `<img src = "${imagePath + poster_path}" alt = "${title}"> 

        <div class = "movie-info">

        <h3>"${title}"</h3>

        <span> "${vote_average}"</span>
        </div>
        </img>

        <div class = "overview">

        <h3>"${overview}"</h3>
        
        </div>`

        main.appendChild(movieElement);
        });
        //return showMovie(movies);
}




form.addEventListener( 'submit', (e) => {
    e.preventDefault();

        const searchWord = search.value; 

        if(searchWord && searchWord !== '') {
            getMovies(searchPath + searchWord)

            search.value = '';
        } else {
            window.location.reload();
        }
});