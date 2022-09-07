import { useParams } from "react-router-dom"
import Data from "../components/Data"


const Detail = () => {

    const params = useParams()
    return(
        <main className="detailPage">
            <img src= {Data[params.detail].img_url}></img>
            <p>{Data[params.detail].title}</p>
            <p>{Data[params.detail].published_date}</p>
            <p>{Data[params.detail].description}</p>
            <p>{Data[params.detail].author}</p>
        </main>
        
        
    )
}
export default Detail