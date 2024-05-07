import { BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import About from "./pages/about"; // Import without curly braces
import Content from "./pages/content";
import Home from "./pages/home"
import Nav from "./nav"
import Error from "./error";

function App() {

  return (
    <BrowserRouter>
    <Nav></Nav>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/content/:name" element={<Content />} />
        <Route path="/home" element={<Home />}/>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
