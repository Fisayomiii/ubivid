import { useEffect, useState } from "react"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Link } from "react-router-dom";

function Banner() {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=36d53de2a3632c1939907e6f9a567b84")
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
    }, [])
    return (
        <>
            <section className="content_section">
                <Carousel showStatus={false} showIndicators={false} showArrows={true} showThumbs={false} autoPlay={true} transitionTime={150} infiniteLoop={true} interval={13000}>
                    {popularMovies.map((movie, index) => (
                        <>
                            <div key={index}>
                                <div>
                                    <img src={`https://image.tmdb.org/t/p/original` + movie.backdrop_path} alt="err displaying backdrop_image" />
                                </div>
                                <div className="backdrop_text">
                                    <p className="title">{movie.title}</p>
                                    {/* <span className="backdropbtn">Action</span> */}
                                </div>
                            </div>
                        </>
                    ))}
                </Carousel>
            </section>
        </>
    )
}

export default Banner