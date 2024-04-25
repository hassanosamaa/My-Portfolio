
import PropTypes from 'prop-types';

export default function Oneproject({dec,img}){
    return(
        <div className='
                w-full md:w-[30%]
                flex flex-col overflow-hidden
                p-2
                justify-center items-start
                gap-[5px] rounded-xl
                shadow-lg
                 shadow-gray-800
                 hover:shadow-sky-500
                 transition duration-300
                bg-sky-950'>
                    <div className="w-full md:h-[190px] ">
                        <img className="w-full  rounded-xl
                        h-full" src={img} alt="img"/>
                    </div>
                    <p className="p-2 text-[15px] font-extralight
                    text-gray-50">{dec}</p>
                    <div className="w-full flex justify-between p-2
                    items-center">
                        <i className="icon-github text-[25px] text-gray-300"></i>
                        <i className="icon-eye text-[25px] text-gray-300"></i>

                    </div>

                    
                </div>
    )
}

Oneproject.propTypes = {
    img: PropTypes.string.isRequired,
    dec: PropTypes.string.isRequired,
  }