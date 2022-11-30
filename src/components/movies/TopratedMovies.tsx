import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";
import Skeleton from '../../Ui/loader/Loader';
import Error from '../../Ui/error/Error';

function TopratedMovies() {

    interface IMovie {
      adult: boolean;
      backdrop_path: string;
      genre_ids: Number[];
      id: number;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path:string;
      release_date: string;
      title: string;
      video: boolean;
      vote_average: number;
      vote_count: number
    }

    const [topRatedMovies, settopRatedMovies] = useState([]);
    const [isloading, setisloading] = useState(true);
    const [error, seterror] = useState(true);

    const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=63963159dae94bf1e30a674eee861084";
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
            settopRatedMovies(res.data.results)
        }).catch((err) => {
            seterror(err)
        });
    }

    return (
        <>
            {/* <!-- Popular Movies --> */}
            <section className="movies" id="Top_Rated">
              <h4 className="movies_header">Top Rated Movies</h4>
                <br />
                {isloading ? <Skeleton /> :
                    <div>
                        {error ? <Error /> :
                            <motion.div className="wrapper" whileTap={{ cursor: "grabbing" }} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}>
                                <motion.div className="inner-wrapper" drag="x" dragConstraints={{ right: -0 }}>
                                    {topRatedMovies.map((items: IMovie, index) => (
                                        <motion.div className="poster-img" key={index}>
                                            <motion.div className="icons">
                                                <motion.span>
                                                    <motion.i className='bx bx-movie-play'></motion.i>
                                                </motion.span>
                                                <motion.span>
                                                    <motion.i whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="bx bx-heart fav" title='Add to Favorites'></motion.i>
                                                </motion.span>
                                            </motion.div>
                                            <img src={`https://image.tmdb.org/t/p/original/` + items.poster_path} alt="" className='posterPath-img' />
                                            <motion.div className="poster_text">
                                                <motion.span className="title">{items.title}</motion.span>
                                                <motion.span className="movie_info">{items.release_date} • <i className='bx bxs-star' style={{ color: `#0687f9`}}></i> {items.vote_average} </motion.span>
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

export default TopratedMovies;
