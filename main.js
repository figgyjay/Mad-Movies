const myApi = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';

const imagePath = 'https://image.tmdb.org/t/p/w1280';

const searchPath = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

//URL's above are from the API I'm using

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(myApi)

async function getMovies(url);{
    const res = await fetch(url);
    const data = await res.json()

    showmovies(data.results);
    console.log(getMovies(myApi));
}

function showMovie(movies){
    main.innerHTML = '';

        movies.forEach(movies) => {
        const { title, poster_path, vote_average, overview } = movies

        const


        }
}