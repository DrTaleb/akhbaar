import "./SingleNewsPage.css"
import {useParams} from "react-router-dom";
export default function SingleNewsPage(){
    let params = useParams()
    console.log(params)

    return(
        <h1>
            hi Im singleNews Page
        </h1>
    )
}