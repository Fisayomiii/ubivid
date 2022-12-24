import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Skeleton from '../../Ui/loader/Loader';
import Error from '../../Ui/error/Error';

function PopularMovies() {
    const [movies, setmovies] = useState([]);
    const [isloading, setisloading] = useState(true);
    const [error, seterror] = useState(true);

    const url = "https://api.themoviedb.org/3/movie/popular?api_key=36d53de2a3632c1939907e6f9a567b84";

    useEffect(() => {
        getData()
        seterror(false)
        setTimeout(() => {
            setisloading(false)
        }, 2500)
    }, [])

    const getData = () => {
        axios.get(url).then((res) => {
            setmovies(res.data.results)
        }).catch((err) => {
            seterror(err)
        });
    }
    return (
        <>
            {/* <!-- Popular Movies --> */}
            <section className="movies" id="Popular_Movies">
                <h4 className="movies_header">Popular Movies</h4>
                <br />
                {isloading ? <Skeleton /> :
                    <div>
                        {error ? <Error /> :
                            <motion.div className="wrapper" whileTap={{ cursor: "grabbing" }} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}>
                                <motion.div className="inner-wrapper" drag="x" dragConstraints={{ right: -0 }}>
                                    {movies.map((items, index) => (
                                        <motion.div className="poster-img" key={index}>
                                            <img src={`https://image.tmdb.org/t/p/original/` + items.poster_path} alt={items.title} className='posterPath-img' />

                                            <motion.div className="poster_text">
                                                <motion.span className="title">{items.title}</motion.span>
                                                <motion.span className="movie_info">{items.release_date} • <i className='bx bxs-star' style={{ color: `#0687f9` }}></i> {items.vote_average} </motion.span>
                                            </motion.div>
                                            <motion.div className="desc_poster_text">{items ? items.overview : "Description not available"}
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        }
                    </div>
                }
            </section>

        </>
    )
}

export default PopularMovies