
import { useRef, useState } from "react";
import PropTypes from 'prop-types';

export default function Nav({fun}) {
    const [c, setC] = useState('about')
    const barEle = useRef()

    const bar = () => {
        barEle.current.classList.add("hidden")

    }
    const bar2 = () => {
        barEle.current.classList.remove("hidden")
    }
    return (
        <div className="
         mx-auto p-4
        flex flex-col md:flex-row
        justify-center items-center
        gap-[10px]
        md:gap-[30%]
        text-white
        bg-gray-900
        dark:bg-gray-400
        
        fixed top-0 left-0 right-0 z-10
        
        ">
            <div className="
            flex flex-row justify-between
            w-full items-start 
            md:w-fit ">
                <p className="font-bold
                tracking-wide text-[22px]
                text-sky-600 pl-2
                dark:text-gray-900
                ">Hassan</p>
                <div className=" 
                md:hidden mr-16">
                    <label className="relative transition duration-300 
                    cursor-pointer">
                        <input type="checkbox" className="peer hidden absolute" />
                        <div className="w-[40px] h-[30px] 
                        rounded-xl absolute"></div>
                        <div className="absolute top-1
                        left-2 peer-checked:hidden text-sky-700
                       ">
                            <i onClick={bar}
                                className="icon-bars  transition-all
                             duration-300 "></i>


                        </div>
                        <div className="absolute top-1 hidden
                         text-sky-700
                        left-2 peer-checked:block ">
                            <i onClick={bar2}
                                className="icon-bars transition-all
                             duration-300"></i>

                        </div>
                    </label>
                </div>
                <div className="group
                block md:hidden mr-10">
                    <label className="relative transition duration-300
                     cursor-pointer">
                        <input onClick={fun}
                        type="checkbox" className="peer hidden absolute" />
                        <div className="w-[40px] h-[30px]  bg-gray-900
                        rounded-xl absolute group-hover:bg-gray-800
                        dark:bg-gray-300 "></div>
                        <div 
                         className="absolute top-1
                        left-3 peer-checked:hidden text-sky-700
                       ">
                            <i 
                            className="icon-moon-o text-[20px]"></i>



                        </div>
                        <div  
                         className="absolute top-1 hidden
                         text-sky-700
                        left-[10px] peer-checked:block">
                            <i 
                            className="icon-brightness-up text-[20px]"></i>



                        </div>
                    </label>
                </div>
            </div>

            <div ref={barEle}
                className="flex flex-col  hidden md:flex
             transition-all duration-300
            md:flex-row gap-[10px]
            items-center justify-center
            md:justify-evenly 
             w-full mt-4 md:mt-0">
                <a href="#about" className={c === 'about' ? "btn check" : "btn"}
                    onClick={() => { setC('about') }}>About</a>
                <a href="#skills" className={c === 'Skills' ? "btn check" : "btn"}
                    onClick={() => { setC('Skills') }}>Skills</a>

                {/* <a href="#projects" className={c === 'projects' ? "btn check" : "btn"}
                    onClick={() => { setC('projects') }}>Projects</a> */}
                <a href="#contact" className={c === 'contact' ? "btn check" : "btn"}
                    onClick={() => { setC('contact') }}>Contact</a>


                <div className="hidden 
                 md:block mb-8 group ">
                    <label className="relative transition duration-300
                    cursor-pointer
                    ">
                        <input onClick={fun}
                         type="checkbox" className="peer hidden absolute" />
                        <div className="w-[40px] h-[35px] 
                        rounded-full absolute bg-gray-900
                       group-hover:bg-gray-800
                        "></div>
                        <div className="absolute top-2
                        left-3 peer-checked:hidden text-sky-700
                       ">
                            <i className="icon-moon-o text-[20px]"></i>



                        </div>
                        <div className="absolute top-2 hidden
                         text-sky-700
                        left-[10px] peer-checked:block">
                            <i className="icon-brightness-up text-[20px]"></i>



                        </div>
                    </label>
                </div>
            </div>
        </div>
    )
}
Nav.propTypes = {
    fun: PropTypes.string.isRequired,
    
  }