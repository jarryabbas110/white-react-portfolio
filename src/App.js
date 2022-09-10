import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Qualification from './components/Qualification';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header />

    <main className="main">
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Contact />
      <Footer />
    </main>
    </>
  );
}

export default App;
