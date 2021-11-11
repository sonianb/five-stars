import Link from "next/link";
import React from "react";

export default function FirstPost() {
    return <div>
        <h1>First Post</h1>
        <Link href="/">
            <a>this page!</a>
        </Link>
    </div>
}
