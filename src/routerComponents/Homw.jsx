import Lottie from 'lottie-react';
import ani  from "../lottie/ani.json";
import { motion } from 'framer-motion';
import my from '../imges/my.png'
import cv from "../cv/cv.pdf";

export default function Home(){
    return(
        <div id='about' 
        className="container 
        mx-auto p-4 md:h-[80vh]
        flex flex-col md:flex-row
        justify-center items-center
        gap-[20px] pt-32 md:mt-0
        md:gap-[10%] text-white
        
       ">
            <div className="  
            w-full md:w-[60%] 
            flex flex-col justify-center
            items-center md:items-start
            gap-[10px] ">
                <div className="flex justify-around
                items-center gap-[15px]">
                    <motion.div initial={{x:-30,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    transition={{duration:1.5}}
                     className="w-[50px] h-[50px]
                     md:w-[80px] md:h-[80px]
                    rounded-full overflow-hidden
                    border border-sky-900
                    bg-gray-900 
                    ">
                        <img 
                        src={my} alt="my"/>
                    </motion.div>
                    <p className="
                    text-[20px]
                    md:text-[30px]
                    font-bold text-gray-300
                    dark:text-gray-900">Front-End Developer</p>
                </div>
                
                <p className="p-4 text-gray-200 font-extralight
                dark:text-gray-950
                "
                >Front-end development, deals with the parts of a website or application that the end user actually sees and interacts with. As a front-end developer, you’ll be working to make websites beautiful, functional, responsive,and accessible.</p>
                <div className="flex 
                justify-center
                gap-[15px]
                items-center w-full 
                md:w-[30%]
                
                ">
                    <a href="https://www.facebook.com/profile.php?id=100020227121713"><i className=" icon-facebook text-[#1877f2] text-[25px] md:text-[30px]   transition duration-300"></i></a>
                    
                    <a href="https://github.com/hassanosamaa"><i className=" icon-github  text-gray-200 dark:text-gray-900 text-[25px] md:text-[30px]  transition duration-300"></i></a>
                    <a href="https://www.linkedin.com/in/hassan-osama-0024631a0"><i className=" icon-linkedin  text-[#0077b5] text-[25px] md:text-[30px]   transition duration-300"></i></a>

                    <a href="https://wa.me/+201157234805"><i className=" icon-whatsapp text-[#25d366]  text-[25px] md:text-[30px]  transition duration-300"></i></a>
                </div>
                <div className="btn mt-4 border border-sky-500 cursor-pointer">
                <a href={cv} download="Hassan Osama_cv.pdf">Download My CV</a> </div>

            </div>




            <div className="
            w-full md:w-[40%]
            flex justify-center
            items-center">
                <Lottie  animationData={ani}
                loop={true}
                />
            </div>
        </div>
    )
}