import '../src/styles/main.css';
import '../src/styles/media.query.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home';
import Movieinfo from './pages/Movieinfo/Movieinfo';
import NotFound from './pages/404 Page/NotFound';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/m' element={<Movieinfo />} />
        <Route path='/*' element={<NotFound />} />

      </Routes>

    </>
  )
}

export default App;
