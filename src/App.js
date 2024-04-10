import PostkeeperContext from "./postkeeperContext";
import Navbar from "./Navbar";
import Home from "./Home";
import "./styles.css";
function App() {
  return (
    <>
      <PostkeeperContext>
        <Navbar />
        <Home />
      </PostkeeperContext>
    </>
  );
}

export default App;
