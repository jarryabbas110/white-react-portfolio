import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Qualification from "./components/Qualification";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Scrollup from "./components/Scrollup";
import Portfolio from "./components/portfolio/Portfolio";
import PuffLoader from "react-spinners/PuffLoader";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loader">
          <PuffLoader color="rgba(20, 20, 20, 1)" loading={loading} size={80} />
        </div>
      ) : (
        <div>
          <Header />

          <main className="main">
            <Home />
            <About />
            <Skills />
            <Services />
            <Qualification />
            <Portfolio />
            <Contact />
          </main>
          <Footer />
          <Scrollup />
        </div>
      )}
    </>
  );
}

export default App;
