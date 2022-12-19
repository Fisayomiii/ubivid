import 'react';
import { NavLink } from 'react-router-dom';
import '../404 Page/NotFound.css';

function NotFound() {
  return (
    <>
      <div className="cover">
        <div className="container">
          <h3>404</h3>
          <div className="infoandcalltoaction">
            <span>This Page cannot be found</span>
            <p>
              <NavLink to={'/'}>
                Go back Home
              </NavLink>
            </p>
          </div>
        </div>
      </div>
      <footer>
        <p>Looks like you're lost</p>
      </footer>
    </>
  )
}

export default NotFound;
