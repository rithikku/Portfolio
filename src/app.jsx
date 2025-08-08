import React from "react";
import ReactDOM from "react-dom/client";

import NavBar from "./component/NavBar";
import HeroSection from "./component/HeroSection";
import AboutSection from "./component/AboutSection";
import ProjectSection from "./component/ProjectSection";
import SkillSection from "./component/SkillSection";
import ContactSection from "./component/ContactSection";
import FooterSection from "./component/FooterSection";

const App = () => {
    return (
        <div>
            <NavBar/>
            <HeroSection/>
            <AboutSection/>
            <ProjectSection/>
            <SkillSection/>
            <ContactSection/>
            <FooterSection/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)