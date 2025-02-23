import HeroPage from "./Components/heroPage.jsx";
import Navbar from "./Components/Navbar.jsx";
import About from "./Components/about.jsx";
import Services from "./Components/Services.jsx";
import TechStack from "./Components/TechStack.jsx";
import FAQSection from "./Components/FAQ.jsx";
import ContactUs from "./Components/ContactUs.jsx";
import Footer from "./Components/Footer.jsx";
import Projects from "./Components/Projects.jsx";

function App() {
    return(
        <>
            <Navbar/>
            <HeroPage/>
            <About/>
            <Services/>
            <TechStack/>
            <Projects />
            <FAQSection />
            <ContactUs />
            <Footer />
        </>
  )
}

export default App;