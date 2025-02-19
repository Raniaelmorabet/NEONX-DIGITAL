import HeroPage from "./Components/heroPage.jsx";
import Navbar from "./Components/Navbar.jsx";
import About from "./Components/about.jsx";
import Services from "./Components/Services.jsx";

function App() {
    return(
        <>
            <Navbar/>
            <HeroPage/>
            <About/>
            <Services/>
        </>
  )
}

export default App;