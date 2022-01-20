import Link from "next/link";

function MoviePage({movie}) {
    return <div>
        <h1>{movie.title}</h1>
        <img src="" alt=""></img>
        <section>Information about the film
            <p>{movie.overview}</p>
            <p>{movie.production_companies.map(e => e.name).join(', ')}</p>
            <p>{movie.genres.map(e => e.name).join(', ')}</p>
            <p>Stars</p>
            <span>Rating</span>
            <Link href={'/'}>
                <button>Go Back</button>
            </Link>
        </section>
    </div>
}

export async function  getServerSideProps(context) {
    const movieId = context.params.id;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=` + process.env.MOVIEDB_API_KEY);
    const movie = await res.json();
    return {
        props: {movie}
    }
  }
  
export default MoviePage;
