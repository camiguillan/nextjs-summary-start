// details for an especific news item
import { useRouter } from "next/router"


export default function DetailsPage(){
    const router = useRouter();

    const newsId = router.query.newsId;    

    // send a request to fetch the news item with the news id       
    
    return <h1>The Details Page</h1>
}