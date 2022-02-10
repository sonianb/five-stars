import Link from "next/link";
import Image from 'next/image'
import useSWR from "swr";
import {useRouter} from "next/router";
import styles from "./Movie.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Ratings from "../../components/ratings/Ratings";


const fetcher = (url) => fetch(url).then(res => res.json());

function MoviePage() {
    const router = useRouter()
    const {id} = router.query
    const {data, error} = useSWR(`https://api.themoviedb.org/3/movie/${id}?api_key=` + process.env.NEXT_PUBLIC_MOVIEDB_API_KEY, fetcher);

    if (!data) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    console.log(data);

    return <div>
        <Header />
        <section className={styles.movieContainer}>
            <h1 id="h1-grid">{data.title}</h1>
            <Image loader={tmdbLoader} src={data.poster_path} alt={data.title} width={200} height={300} id="img-grid" />
                <ul>
                    <li className={styles.listItem} id="plot-grid">Plot {data.overview}</li>
                    <li className={styles.listItem} id="genre-grid">Genre {data.genres.map(e => e.name).join(', ')}</li>
                    <li className={styles.listItem} id="production-grid">Production Companies {data.production_companies.map(e => e.name).join(', ')}</li>
                </ul>
                <section className={styles.ratingContainer} id="rating-grid">
                    <p>Rate the movie</p>
                    <Ratings movie={data} />
                </section>
                <Link href={'/'}>
                    <button>Go Back</button>
                </Link>
        </section>
        <Footer />
    </div>
}

const tmdbLoader = ({src, width, quality}) => {
    return `https://image.tmdb.org/t/p/w500/${src}?w=${width}&q=${quality || 75}`
}

export default MoviePage;
