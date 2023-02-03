import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/MainBlock/Main";
import {Skills} from "./Components/SkillsBlock/Skills";
import {Projects} from "./Components/ProjectsBlock/Projects";
import {ContactForm} from "./Components/ContactForm/ContactForm";
import {Footer} from "./Components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <ContactForm/>
            <Footer/>
        </div>
    );
}

export default App;
