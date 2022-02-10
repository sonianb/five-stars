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
            <h1 id={styles.h1Grid}>{data.title}</h1>
            <div id={styles.imgGrid}>
                <Image loader={tmdbLoader} src={data.poster_path} alt={data.title} width={200} height={300} />
            </div>
            <h2 className={styles.listItem} id={styles.plotGrid}>Plot</h2> <p id={styles.plotGrid}>{data.overview}</p>
            <h2 className={styles.listItem} id={styles.genreGrid}>Genre</h2> <p id={styles.genreGrid}>{data.genres.map(e => e.name).join(', ')}</p>
            <h2 className={styles.listItem} id={styles.productionGrid}>Production Companies</h2> <p id={styles.productionGrid}>{data.production_companies.map(e => e.name).join(', ')}</p>
            <section className={styles.ratingContainer} id={styles.ratingGrid}>
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
