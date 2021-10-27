import "./App.css";
import Header from "./components/Header";

import Introduction from "./components/Introduction";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

window.onscroll = function() {scrollFunction()};
var mybutton = document.getElementById("myBtn");
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function App() {


  return (
    <div className="App">
      <button  id="myBtn" title="Go to top">Top</button>
      <Header />

      <Introduction />

      <About />

      <Projects />

      <Contact />
    </div>
  );
}

export default App;
