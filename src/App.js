import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/AboutMe';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
    </>
  );
}

export default App;
