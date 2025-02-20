import HeroPage from "./Components/heroPage.jsx";
import Navbar from "./Components/Navbar.jsx";
import About from "./Components/about.jsx";
import Services from "./Components/Services.jsx";
import TechStack from "./Components/TechStack.jsx";
import FAQSection from "./Components/FAQ.jsx";

function App() {
    return(
        <>
            <Navbar/>
            <HeroPage/>
            <About/>
            <Services/>
            <TechStack/>
            <FAQSection />
        </>
  )
}

export default App;