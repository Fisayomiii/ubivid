// import { motion } from "framer-motion";
import Sidebar from '../../components/sidebar/Sidebar';
import img from '../../assets/imgs/favicon.jpg';
function Movieinfo() {
  return (
    <>
      <div className="app">
        <Sidebar />
        <main className="content">
          <section className="banner">
            <div className="banner">
              <img src={img} className="backdrop_image" alt="err displaying backdrop_image" />
            </div>

            <div className="backdrop_text">
              <h2 className="title">Title</h2>
              <div className="movie-info-genres">
                <span className="backdropbtn">Genres</span>
              </div>

              <p className="storyline-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsa
                animi pariatur esse, incidunt porro? Corporis eaque quasi optio
                obcaecati ipsum aliquam nam, excepturi beatae ullam numquam rerum
                facilis consectetur.
              </p>
              {/* <!-- <span className="play">Watch Trailer</span> --> */}
            </div>
          </section>

          {/* <!-- Casts --> */}
          {/* <section className="casts" id="Popular_Movies">
            <h4 className="movies_header">Casts</h4>
            <motion.div className="wrapper" whileTap={{ cursor: "grabbing" }} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}>
              <motion.div className="inner-wrapper" drag="x" dragConstraints={{ right: -0 }}>

                <motion.div className="poster-img">
                  <img src={img} alt="" className='posterPath-img' />
                  <motion.div className="poster_text">
                    <motion.span className="title">title</motion.span>
                    <motion.span className="movie_info">Name • role </motion.span>
                  </motion.div>
                </motion.div>



              </motion.div>
            </motion.div>
          </section> */}
        </main>
      </div>
    </>
  )
}

export default Movieinfo;
