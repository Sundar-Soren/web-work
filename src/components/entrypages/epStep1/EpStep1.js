import React from "react";
import "./epStep1.scss";

const EpStep1 = () => {
  return (
    <div className="epStep1">
      <div className="epStep1_container">
        <div className="epStep1_heading">
          <h1>What should we call your project ?</h1>
          <p>Don't worry you always change it later</p>
        </div>
        <form>
          <input type="text" placeholder="Eg - Retail Experience" />
          <button>Next</button>
        </form>
      </div>
    </div>
  );
};

export default EpStep1;
