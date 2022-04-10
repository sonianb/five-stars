import Image, { ImageLoader } from 'next/image';
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Ratings from "../../components/ratings/Ratings";
import styles from "./Movie.module.css";


const fetcher = (url) => fetch(url).then(res => res.json());

function MoviePage() {
    const router = useRouter()
    const { id } = router.query
    const { data, error } = useSWR(`https://api.themoviedb.org/3/movie/${id}?api_key=` + process.env.NEXT_PUBLIC_MOVIEDB_API_KEY, fetcher);

    if (!data) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <div>
        <Header />
        <section className={styles.movieContainer}>
            <h1 id={styles.h1Grid}>{data.title}</h1>
            <div className={styles.moviePoster} id={styles.imgGrid}>
                <Image loader={tmdbLoader} src={data.poster_path} alt={data.title} width={300} height={450} />
            </div>
            <div id={styles.plotGrid}>
                <h2 className={styles.listItem}>Plot</h2>
                <p >{data.overview}</p>
            </div>

            <div id={styles.genreGrid}>
                <h2 className={styles.listItem}>Genre</h2>
                <p>{data.genres.map(e => e.name).join(', ')}</p>
            </div>

            <div id={styles.productionGrid}>
                <h2 className={styles.listItem}>Production Companies</h2>
                <p>{data.production_companies.map(e => e.name).join(', ')}</p>
            </div>

            <section className={styles.ratingContainer} id={styles.ratingGrid}>
                <p>Rate the movie</p>
                <Ratings movie={data} />
            </section>
            <div>
                <Link href={'/'} passHref>
                    <button>Go Back</button>
                </Link>
            </div>
        </section>
        <Footer />
    </div>
}

const tmdbLoader: ImageLoader = ({ src, width, quality }) => {
    return `https://image.tmdb.org/t/p/w500/${src}?w=${width}&q=${quality || 75}`
}

export default MoviePage;
