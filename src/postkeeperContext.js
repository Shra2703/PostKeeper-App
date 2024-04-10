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
    console.log( ans)
    return ans;
  };

  const setSavedPost = (post) => {
    let ans = isPostSaved(post.id);
    // if (ans) alert("Post Alredy Saved!!!");
    if (ans) {
      let arr = mySavedPost.filter((myPost) => myPost.id != post.id);
      // console.log("for delete")
      // console.log(arr);
      setMysavedPost([...arr]);
      // console.log(mySavedPost)
    } 
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
