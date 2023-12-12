import About from "./components/About";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Details from "./components/Details"
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/blogs" element={<Blogs/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
          <Route path="/home" element={<Navigate to="/"/>}></Route>
          <Route path="/info" element={<Navigate to="/about"/>}></Route>
          <Route path="/blog/:id" element={<Details/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
