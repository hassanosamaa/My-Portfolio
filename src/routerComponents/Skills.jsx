import Oneskill from "../utilitiesComponents/Oneskill"

export default function Skills(){
    const data=[
        {name:"React" ,img:"icon-react"},
        {name:"Javascript" ,img:"icon-javascript"},
        {name:"Html",img:"icon-html5"},
        {name:"Css",img:"icon-css3"},
        {name:"Tailwind" ,img:"icon-tailwindcss"},
        {name:"Redux",img:"icon-redux"},
        {name:"Python",img:"icon-python"},
        {name:"Github",img:"icon-github"},]
    return(
        
        <div id="skills"
        className="container mx-auto  md:h-screen
         px-16 md:p-16
        grid grid-cols-1 md:grid-cols-4
        place-itens-center gap-[25px] md:mt-10
        pt-8
         "> 
        {data.map((ele)=>(
            <Oneskill key={ele.name}
            name={ele.name}
            img={ele.img}/>
        ))}
        </div>
    )
}