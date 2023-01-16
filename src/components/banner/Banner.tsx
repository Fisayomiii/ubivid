import { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Skeleton from '../../Ui/loader/Loader';
import Error from '../../Ui/error/Error';
// import { Link } from "react-router-dom";

function Banner() {
    const [popularMovies, setPopularMovies] = useState([]);
    const [isloading, setisloading] = useState(true);
    const [error, seterror] = useState(true);

    // useEffect(() => {
    //     fetch("https://api.themoviedb.org/3/movie/popular?api_key=36d53de2a3632c1939907e6f9a567b84")
    //         .then(res => res.json())
    //         .then(data => setPopularMovies(data.results))
    //         .catch((err) => {
    //             seterror(err)
    //         });
    // }, [])

    const url = "https://api.themoviedb.org/3/movie/popular?api_key=36d53de2a3632c1939907e6f9a567b84";

    useEffect(() => {
        getData()
        seterror(false)
        setTimeout(() => {
            setisloading(false)
        }, 3500)
    }, [])

    const getData = () => {
        axios.get(url).then((res) => {
            setPopularMovies(res.data.results)
        }).catch((err) => {
            seterror(err)
        });
    }

    interface iMovie {
        page: number;
        total_pages: number;
        total_results: number;
        name: string;
        adult: boolean;
        backdrop_path: string;
        genre_ids?: (number)[] | string;
        id: number;
        genres: string;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
    }

    return (
        <>
            <section className="content_section">
            {isloading ? <Skeleton /> :
                    <div>
                        {error ? <Error /> :
                           <Carousel showStatus={false} showIndicators={false} showArrows={true} showThumbs={false} autoPlay={true} transitionTime={150} infiniteLoop={true} interval={13000}>
                           {popularMovies.map((movie: iMovie, index) => (
                               <>
                                   <div key={index}>
                                       <div>
                                           <img src={`https://image.tmdb.org/t/p/original` + movie.backdrop_path} alt="err displaying backdrop_image" />
                                       </div>
                                       <div className="backdrop_text">
                                           <p className="title">{movie.title}</p>
                                       </div>
                                   </div>
                               </>
                           ))}
                       </Carousel>
                        }
                    </div>
                }
                
            </section>
        </>
    )
}

export default Banner
