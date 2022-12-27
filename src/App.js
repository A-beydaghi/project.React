import Article from './Article'
import Slideshow from './Slideshow'
import Calculator from './Calculator'
import Todolist from './Todolist'
import Validation from './Validation'
import Home from './Home'
import './style.css'
import './bootstrap.min.css'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Article />} />
        <Route path = "/Slideshow" element = {<Slideshow />} />
        <Route path = "/Todolist" element = {<Todolist />} />
        <Route path = "/Calculator" element = {<Calculator />} />
        <Route path = "/Validation" element = {<Validation />} />
        <Route path = "/Home" element = {<Home />} />
      </Routes>
    </div>
  );
}

export default App;
