export default function Footer(){
    return(
        <div className="
         mx-auto p-4
        flex flex-col md:flex-row
        justify-center
        md:gap-[15%] 
        gap-[10px]itmes-center
        text-gray-100
        bg-gray-900
        mt-8
        md:h-[15vh]
        dark:bg-gray-400

        
        ">
            <div className="text-gray-400 text-center p-4
            w-full dark:text-gray-900
            md:w-[40%]">Front End Developer</div>
            <div className="flex 
                justify-center
                gap-[15px]
                items-center w-full 
                md:w-[30%]
                
                ">
                    <a href="https://www.facebook.com/profile.php?id=100020227121713"><i  className=" icon-facebook text-gray-500 dark:text-gray-900 text-[20px]  hover:text-[#1877f2]  "></i></a>
                    
                    <a href="https://github.com/hassanosamaa"><i className=" icon-github text-gray-500 text-[20px]   dark:text-gray-900   hover:text-gray-200 transition duration-300"></i></a>
                    <a href="https://www.linkedin.com/in/hassan-osama-0024631a0"><i className=" icon-linkedin text-gray-500 text-[20px]  dark:text-gray-900    hover:text-[#0077b5] transition duration-300"></i></a>

                    <a href="https://wa.me/+201157234805"><i className=" icon-whatsapp text-gray-500 text-[20px]   dark:text-gray-900  hover:text-[#25d366]  transition duration-300"></i></a>
                </div>
        </div>
    )
}