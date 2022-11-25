import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";
import Skeleton from '../../Ui/loader/Loader';
import Error from '../../Ui/error/Error';

function PopularMovies() {

    interface IMovie {
        title: String;
        poster_path: String;
        backdrop_path: String;
        release_date: String;
        vote_average: String;
        genre_ids: String;
        original_language: String;
        overview: String;
    }

    const [movies, setmovies] = useState([]);
    const [isloading, setisloading] = useState(true);
    const [error, seterror] = useState(true);

    const url = "https://api.themoviedb.org/3/movie/popular?api_key=36d53de2a3632c1939907e6f9a567b84";
    // const key = "36d53de2a3632c1939907e6f9a567b84";

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
                {error ? <Error /> :
                    <div>
                        {isloading ? <Skeleton /> :
                            <motion.div className="bottom-images" drag="x" dragConstraints={{ right: -0 }} whileTap={{ cursor: "grabbing" }} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}>
                                {movies.map((items: IMovie, index) => (
                                    <motion.div className="img" key={index}>
                                        <motion.div>
                                            <motion.div className="icons">
                                                <motion.span>
                                                    <motion.i className='bx bx-movie-play'></motion.i>
                                                </motion.span>
                                                <motion.span>
                                                    <motion.i whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="bx bx-heart fav"></motion.i>
                                                    <motion.p className="tooltip">Add to Favorites</motion.p>
                                                </motion.span>
                                            </motion.div>
                                            <img src={`https://image.tmdb.org/t/p/original/` + items.poster_path} alt="" />
                                            <motion.div className="poster_text">
                                                <motion.span className="title">{items.title}</motion.span>
                                                <motion.span className="movie_info">{items.release_date} • {items.vote_average} </motion.span>
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        }
                    </div>
                }
            </section>
        </>
    )
}

export default PopularMovies;
