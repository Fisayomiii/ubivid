import React from 'react';
import Banner from '../../components/banner/Banner';
import PopularMovies from '../../components/movies/PopularMovies';
import Populartv from '../../components/movies/Populartv';
import Toprated from '../../components/movies/TopratedMovies';
import UpcomingMovies from '../../components/movies/UpcomingMovies';
import Footer from '../../components/footer/Footer';
import Sidebar from '../../components/sidebar/Sidebar';

function Home() {

    return (
        <>
            <div className="app">
                <Sidebar />
                <main className="content">
                    <Banner />
                    <PopularMovies />
                    <Populartv />
                    <Toprated />
                    <UpcomingMovies />
                    <Footer />
                </main>
            </div>
        </>
    )
}

export default Home;
