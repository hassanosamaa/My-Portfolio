import { useState } from "react";
import Oneproject from "../utilitiesComponents/Oneproject";
import img1 from '../imges/pro1.jpg'
import img2 from '../imges/pro2.jpg'
import img3 from '../imges/pro3.jpg'
import img4 from '../imges/pro4.jpg'
import img5 from '../imges/pro5.jpg'
import img6 from '../imges/pro6.jpg'
import img7 from '../imges/pro7.jpg'
import { motion } from 'framer-motion';

export default function Projects() {
    const [c, setC] = useState("Easy")
    const data = [{ img: img1, dec: "Front-end development, deals with the parts of a website or application that the end ." },
    { img: img2, dec: "Front-end development, deals with the parts of a website or application that the end ." },
    { img: img3, dec: "Front-end development, deals with the parts of a website or application that the end ." },
    { img: img4, dec: "Front-end development, deals with the parts of a website or application that the end ." },
    { img: img5, dec: "Front-end development, deals with the parts of a website or application that the end ." },
    { img: img6, dec: "Front-end development, deals with the parts of a website or application that the end ." },
    { img: img7, dec: "Front-end development, deals with the parts of a website or application that the end ." },
    ]
    return (
        <div id="projects"
        className="
        container mx-auto  
        p-4 
        flex flex-col 
         justify-center
        items-center
         gap-[20px]
        md:gap-[10%] text-white
        overflow-hidden md:mt-10 pt-8
        ">
            <div className="
            w-full  flex
            justify-center items-center
            gap-[10px]
            flex-wrap
            ">
                <button onClick={() => { setC("Easy") }} className={c === "Easy" ? "btn check" : "btn"}>Easy</button>
                <button onClick={() => { setC("medium ") }} className={c === "medium " ? "btn check" : "btn"}>Medium </button>
                <button onClick={() => { setC("difficult") }} className={c === "difficult" ? "btn check" : "btn"}>Difficult</button>
            </div>
            <motion.div initial={{ opacity: 0, x: 130 }}
                transition={{ duration: 2.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="
            p-8 md:px-0 xl:px-32
            w-full  
            flex flex-col 
            flex-wrap
            md:flex-row gap-[25px]
            justify-center items-center
            
            
            ">
                {data.map((ele) => (
                    <Oneproject key={ele.dec}
                        dec={ele.dec}
                        img={ele.img}

                    />
                ))}





            </motion.div>
        </div>
    )
}