import Link from "next/link";
import Image from 'next/image'
import useSWR from "swr";
import { useRouter } from "next/router";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";


const fetcher = (url) => fetch(url).then(res => res.json());

function MoviePage() {
    const router = useRouter()
    const { id } = router.query
    const { data, error } = useSWR(`https://api.themoviedb.org/3/movie/${id}?api_key=` + process.env.NEXT_PUBLIC_MOVIEDB_API_KEY, fetcher);

    if (!data) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    console.log(data);


    return <div>
        <Header />
        <h1>{data.title}</h1>
        <Image loader={tmdbLoader} src={data.poster_path} alt={data.title} width={200} height={300} />
        <section>Information about the film
            <p>{data.overview}</p>
            <p>{data.production_companies.map(e => e.name).join(', ')}</p>
            <p>{data.genres.map(e => e.name).join(', ')}</p>
            <p>Stars</p>
            <span>Rating</span>
            <Link href={'/'}>
                <button>Go Back</button>
            </Link>
        </section>
        <Footer />
    </div>
}

const tmdbLoader = ({ src, width, quality }) => {
    return `https://image.tmdb.org/t/p/w500/${src}?w=${width}&q=${quality || 75}`
}

export default MoviePage;
