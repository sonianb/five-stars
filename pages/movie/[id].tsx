import Link from "next/link";

function moviePage() {
    return <div>
        <h1>Movie Title</h1>
        <img src="" alt=""></img>
        <section>Information about the film
            <p>Plot description</p>
            <p>Director</p>
            <p>Writers</p>
            <p>Stars</p>
            <span>Rating</span>
            <Link href={'/'}>
                <button>Go Back</button>
            </Link>
        </section>
    </div>
}

export default moviePage;