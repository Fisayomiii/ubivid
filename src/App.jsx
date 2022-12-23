
import '../src/styles/main.css';
import '../src/styles/media.query.css';
import Banner from './components/banner/Banner';
import Sidebar from './components/sidebar/Sidebar';

function App() {

  return (
    <>
      <div className="app">
        <Sidebar />
        <main className="content">
          <Banner />
        </main>
      </div>
    </>
  )
}

export default App
