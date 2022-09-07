import Container from "../components/Container"
import Data  from "../components/Data"

const Blog = () => {
    return(
        <section className="blogSection">

            {Data.map((item) =>
                <Container id={item.id} image={item.img_url} title={item.title} />
            )}
        </section>
    )

}

export default Blog