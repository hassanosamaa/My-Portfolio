import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
export default function Oneskill({name,img}){
    return(
        <motion.div initial={{scale:0.5,opacity:0}}
        transition={{duration:0.5}}
        whileInView={{scale:1,opacity:2}}
        className="flex flex-col justify-center
        items-center gap-[15px]
        rounded-xl text-white
        w-full md:w-[100%]
        bg-gray-900 p-4
        hover:border-sky-900
        hover:bg-gray-800
        tansition duration-300
        shadow-lg
        shadow-sky-950
        hover:shadow-sky-500
        
        group">
            <div className='skill group-hover:scale-110
            transition duration-300 cursor-pointer '
             >
            <i className={`${img} w-[50%]`}
            
              ></i></div>
            <div className="font-bold dark:text-gray-100
            text-gray-300 tracking-wider">{name}</div>

        </motion.div>
    )
}
Oneskill.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }