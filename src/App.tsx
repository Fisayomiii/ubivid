import '../src/styles/main.css';
import '../src/styles/media.query.css';
import Sidebar from './components/sidebar/Sidebar';
import Banner from './components/banner/Banner';
import PopularMovies from './components/movies/PopularMovies';
import Populartv from './components/movies/Populartv';
import Toprated from './components/movies/TopratedMovies';
import UpcomingMovies from './components/movies/UpcomingMovies';

function App() {

  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Banner />
        <PopularMovies />
        <Populartv />
        <Toprated />
        <UpcomingMovies />
      </main>
    </div>
  )
}

export default App;
