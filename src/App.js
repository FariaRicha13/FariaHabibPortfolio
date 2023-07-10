import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Research } from './components/Research';
import { Expertise } from './components/Expertise';
import { Footer } from './components/Footer';
function App() {
  return (
    <div className="App">
    <NavBar />
    <Banner/>
    <Skills/>
    <Projects/>
    <Research/>
    <Expertise/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
