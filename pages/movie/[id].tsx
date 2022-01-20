import Link from "next/link";
import Image from 'next/image'

function MoviePage({movie}) {
    return <div>
        <h1>{movie.title}</h1>
        <Image loader={tmdbLoader} src={movie.poster_path} alt={movie.title} width={200} height={300}/>
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

export async function getServerSideProps(context) {
    const movieId = context.params.id;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=` + process.env.MOVIEDB_API_KEY);
    const movie = await res.json();
    return {
        props: {movie}
    }
}

const tmdbLoader = ({src, width, quality}) => {
    return `https://image.tmdb.org/t/p/w500/${src}?w=${width}&q=${quality || 75}`
}

export default MoviePage;
