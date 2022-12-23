import {useState} from "react";

function Sidebar() {
    const [menu_class, setMenuClass] = useState("menu sidebar hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            // setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            // setBurgerClass("burger-bar unclicked")
            setMenuClass("menu sidebar hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }
  return (
    <>
            {/* Sidebar */}
            <aside className={menu_class}>
                <div className="logo_div">
                    <h4>Ubi<span>vid</span>.</h4>
                </div>

                {/* <div className="search">
                 <i className="bx bx-search"></i>
                 <input type="text" className="hide" placeholder="Quick Search ..." />
            </div> */}
            
                <br />
                <div>
                    <div className="sidebar_section">
                        <p>Menu</p>
                        <ul className="ps-0">
                            <li>
                                <a href="/" className="active">
                                    <i className='bx bxs-compass' style={{ color: "#fe2c55" }}></i>
                                    <span>All Movies</span>
                                </a>
                            </li>
                            <li>
                                <a href="#Popular_Movies">
                                    <i className="bx bx-movie-play"></i>
                                    <span>Popular Movies</span>
                                </a>
                            </li>
                            <li>
                                <a href="#Top_Rated">
                                    <i className="bx bx-right-top-arrow-circle"></i>
                                    <span>Top Rated Movies</span>
                                </a>
                            </li>
                            <li>
                                <a href="#Upcoming">
                                    <i className="bx bx-calendar"></i>
                                    <span>Upcoming Movies</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* <div className="sidebar_section">
                    <p>Genres</p>
                    <ul className="ps-0">
                        <li>
                            <a href="/home">
                                <i className="bx bx-run"></i>
                                <span>Action</span>
                            </a>
                        </li>
                        <li>
                            <a href="/home">
                                <i className="bx bx-cycling"></i>
                                <span>Adventure</span>
                            </a>
                        </li>
                        <li>
                            <a href="/home">
                                <i className="bx bx-face"></i>
                                <span>Animation</span>
                            </a>
                        </li>
                        <li>
                            <a href="/home">
                                <i className="bx bx-ghost"></i>
                                <span>Horror</span>
                            </a>
                        </li>
                        <li>
                            <a href="/home">
                                <i className="bx bx-film"></i>
                                <span>Science Fiction</span>
                            </a>
                        </li>
                        <li>
                            <a href="/home">
                                <i className="bx bx-film"></i>
                                <span>Western</span>
                            </a>
                        </li>
                    </ul>
                </div> */}

                    <div className="sidebar_section">
                        <p>Options</p>
                        <ul className="ps-0">
                            {/* <li>
                            <a href="/home">
                                <i className="bx bx-search-alt"></i>
                                <span>Search</span>
                            </a>
                        </li>
                        <li>
                            <a href="/home">
                                <i className="bx bx-bell"></i>
                                <span>Notifications</span>
                            </a>
                        </li>
                        <li>
                            <a href="/home">
                                <i className="bx bx-heart"></i>
                                <span>Favorites</span>
                            </a>
                        </li> */}
                            <li>
                                <a href="/home">
                                    <i className="bx bx-user-circle"></i>
                                    <span>Profile</span>
                                </a>
                            </li>
                            <li>
                                <a href="/home">
                                    <i className="bx bx-cog"></i>
                                    <span>Settings</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>

            {/* hamburger */}
            <div className="menu-toggle">
                <div className="hamburger" onClick={updateMenu}>
                    <input type="checkbox" />
                    <div className="hamburgerlines">
                        <span className="lines line1"></span>
                        <span className="lines line2"></span>
                        <span className="lines line3"></span>
                    </div>
                </div>
            </div>

        </>
  )
}

export default Sidebar