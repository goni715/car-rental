import Navbar from "./components/Navbar/Navbar.jsx";
import {useEffect, useState} from "react";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Services from "./components/Services/Services.jsx";
import CarList from "./components/CarList/CarList.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";


const App = () => {
    // dark mode start
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    const element = document.documentElement;

    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [element,theme]);
    // dark mode end




    return (
        <>
           <Navbar theme={theme} setTheme={setTheme}/>
           <Hero theme={theme}/>
            <About/>
            <Services/>
            <CarList/>
            <Testimonial/>
            <AppStoreBanner/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default App;