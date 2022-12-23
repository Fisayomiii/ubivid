
import '../src/styles/main.css';
import '../src/styles/media.query.css';
import Banner from './components/banner/Banner';
import PopularMovies from './components/movies/PopularMovies';
import Populartv from './components/movies/Populartv';
import TopratedMovies from './components/movies/TopratedMovies';
import Sidebar from './components/sidebar/Sidebar';

function App() {

  return (
    <>
      <div className="app">
        <Sidebar />
        <main className="content">
          <Banner />
          <PopularMovies/>
          <Populartv/>
          <TopratedMovies/>
        </main>
      </div>
    </>
  )
}

export default App
