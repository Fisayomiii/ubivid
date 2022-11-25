import "react";

function Banner() {

  return (
    <>

      <section className="content_section">
        <div className="banner">
          <img
            src="https://fandomwire.com/wp-content/uploads/2022/05/black-adam-2021-poster-6173-scaled.webp"
            className="backdrop_image"
            alt="err displaying backdrop_image"
          />
        </div>
        <div className="backdrop_text">
          <p className="title">Black Adam</p>
          <span className="backdropbtn">Action</span> <span className="backdropbtn">Fantasy
          </span> <span className="backdropbtn">Science Fiction</span>
          {/* <div className="action">
            <button type="button" className="watchbtn">
              <span className="watchbtn" >See More<i className="bx bx-play-circle"></i></span>
            </button>
          </div> */}
        </div>
      </section>

    </>
  );
}

export default Banner;
