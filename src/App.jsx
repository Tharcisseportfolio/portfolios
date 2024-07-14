import Navbar from './component/navbar/Navbar';
import Home from './component/home/Home';
import About from './component/about/About';
import Projects from './component/projects/Projects';
import Education from './component/education/Education';
import Experience from './component/experience/Experience';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />

      <Experience />
      <Education />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;