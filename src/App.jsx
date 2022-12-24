import { Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home';
import Movieinfo from './pages/Movieinfo/Movieinfo';
import NotFound from './pages/404 Page/NotFound';
import '../src/styles/main.css';
import '../src/styles/media.query.css';

function App() {

  return (
    <>
      {/* <Router> */}
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path="movie/:id" element={<Movieinfo />} /> */}
          <Route path='/*' element={<NotFound />} />
        </Routes>
      {/* </Router> */}
    </>
  )
}

export default App
