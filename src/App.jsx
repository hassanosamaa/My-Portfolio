
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Nav from "./mainComponents/Nav";
import  Home  from "./routerComponents/Homw";
import Projects from "./routerComponents/Projects";
import Skills from "./routerComponents/Skills";
import Contact from './routerComponents/Contact';
import Footer from './mainComponents/Footer';
import { useRef } from "react";
import Title from "./utilitiesComponents/Title";


function App() {
  const Body=useRef()
  const BODY=()=>{
    Body.current.classList.toggle("dark")
  }
  return (
    <div ref={Body} className='font-font_family '>
      <div className="bg_dark dark:bg-gray-300">
          <Nav fun={BODY}/>
          <Home/>
          <Title title={"My Skills"}/>
          <Skills/>
          <Title title={"My Projects"}/>
          <Projects/>
          <Title title={"Contact "}/>
          <Contact/>
          <Footer/>
      </div>
      

    </div>
  
  );
}

export default App;
