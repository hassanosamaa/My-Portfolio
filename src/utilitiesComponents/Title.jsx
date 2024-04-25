import PropTypes from 'prop-types';

export default function Title({title}){
    return(
        <div className="container mx-auto p-2 
        flex justify-center items-center">
            <p className='
            text-gray-200 dark:text-gray-900
            text-[25px] font-bold 
            tracking-wider border-b
            border-sky-600
            dark:border-sky-900
             px-8 pt-16 border-b-4
            pb-4'>{title}</p>
        </div>
    )
}
Title.propTypes = {
    title: PropTypes.string.isRequired,
  }