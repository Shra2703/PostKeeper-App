import { createContext, useContext, useState } from "react";
import { posts } from "./data";

const postContext = createContext();

export function useCustomContext() {
  let value = useContext(postContext);
  return value;
}

function PostkeeperContext({ children }) {
  const [mySavedPost, setMysavedPost] = useState([]);

  const isPostSaved = (id) => {
    let ans = mySavedPost.find((post) => post.id === id);
    return ans;
  };

  const setSavedPost = (post) => {
    let ans = isPostSaved(post.id);
    if (ans) alert("Post Alredy Saved!!!");
    else setMysavedPost((prev) => [post, ...prev]);
  };

  const resetFunctionality = () => {
    setMysavedPost([]);
  };

  return (
    <>
      <postContext.Provider
        value={{ setSavedPost, resetFunctionality, mySavedPost, isPostSaved }}
      >
        {children}
      </postContext.Provider>
    </>
  );
}

export default PostkeeperContext;
