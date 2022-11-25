import React from "react";
import "../../Ui/loader/Loader.css";

function Skeleton() {
  return (
    <>
      <div className="gearbox">
        <div className="overlay"></div>
        <div className="gear one">
          <div className="gear-inner">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <div className="gear two">
          <div className="gear-inner">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <div className="gear three">
          <div className="gear-inner">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <div className="gear four large">
          <div className="gear-inner">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Skeleton;
