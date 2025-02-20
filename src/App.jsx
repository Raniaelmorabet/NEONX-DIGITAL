import HeroPage from "./Components/heroPage.jsx";
import Navbar from "./Components/Navbar.jsx";
import About from "./Components/about.jsx";
import Services from "./Components/Services.jsx";
import TechStack from "./Components/TechStack.jsx";

function App() {
    return(
        <>
            <Navbar/>
            <HeroPage/>
            <About/>
            <Services/>
            <TechStack/>
        </>
  )
}

export default App;