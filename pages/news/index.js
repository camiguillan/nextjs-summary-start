// for domain/news
import { Fragment } from "react"
import Link from "next/link"

export default function NewsPage(){


    return <Fragment>
        <h1>The News Page</h1>  
        <ul>
            <li> <Link href={'/news/The-next-js-is-a-great-Framework'}>
            The next js is a great Framework 
            </Link> 
            </li>
        </ul>
    </Fragment>
    
}