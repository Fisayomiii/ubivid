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
        </main>
      </div>
    </>
  )
}

export default Movieinfo;
