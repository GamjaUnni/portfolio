import Header from "@/components/atoms/Header/Header";
import Home from "@/components/pages/Home/Home";
import Navigation from "@/components/atoms/Navigation/Navigation";
import About from "@/components/pages/About/About";

function App() {
    return (
        <>
            <Navigation />
            <Header />
            <Home />
            <About />
        </>
    );
}

export default App;
