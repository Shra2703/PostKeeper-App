import React, { useState } from "react";
import { useCustomContext } from "./postkeeperContext";

function Navbar(props) {
  let { mySavedPost, resetFunctionality } = useCustomContext();
  let [showSavedPost, setShowSavedPost] = useState(false);
  return (
    <>
      <div className="navbar">
        <span onClick={() => setShowSavedPost(!showSavedPost)}>
         Total Post: {mySavedPost.length}
        </span>
        {showSavedPost && (
          <div className="saved-list">
            {mySavedPost.map((p) => (
              <div className="saved-post" key={p.id}>
                <h3>{p.text}</h3>
                <img src={p.img} alt={p.text} />
              </div>
            ))}
          </div>
        )}

        <button onClick={resetFunctionality}>Reset</button>
      </div>
    </>
  );
}

export default Navbar;
