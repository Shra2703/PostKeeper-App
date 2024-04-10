import React from "react";
import { useCustomContext } from "./postkeeperContext";
import { posts } from "./data";

function Home() {
  let { setSavedPost, isPostSaved } = useCustomContext();
  return (
    <div className="list">
      {posts.map((p) => (
        <div className="post" key={p.id}>
          <h3>{p.text}</h3>
          <img src={p.img} alt={p.text} />
          <img
            src={
              isPostSaved(p.id)
                ? "https://cdn-icons-png.flaticon.com/512/64/64022.png"
                : "https://cdn-icons-png.flaticon.com/512/102/102279.png"
            }
            alt=""
            onClick={() => setSavedPost(p)}
          />
        </div>
      ))}
    </div>
  );
}

export default Home;
