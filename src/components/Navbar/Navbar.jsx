import {BiSolidMoon, BiSolidSun} from "react-icons/bi";
import {useState} from "react";
import {HiMenuAlt1, HiMenuAlt3} from "react-icons/hi";
import {IoMdClose} from "react-icons/io";
import MobileMenu from "./MobileMenu.jsx";


const NavLinks = [
    {
        id: 1,
        name: "HOME",
        link: "/#",
    },
    {
        id: 2,
        name: "CARS",
        link: "/#cars",
    },
    {
        id: 1,
        name: "ABOUT",
        link: "/#about",
    },
    {
        id: 1,
        name: "BOOKING",
        link: "/#booking",
    },
];

const Navbar = ({theme, setTheme}) => {
    const [showMenu, setShowMenu] = useState(false);


    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };



    return (
        <>
           <div className="shadow-md py-5 z-10 bg-white dark:bg-dark dark:text-white duration-300">
               <div className="container">
                   <div className="flex items-center justify-between">
                       <div>
                           <h1 className="text-3xl font-bold font-serif">Car Rental</h1>
                       </div>
                       <nav className="hidden md:block">
                           <ul className="flex items-center gap-8">
                               {
                                   NavLinks.map((item,i)=>{
                                       return(
                                           <>
                                               <li key={i.toString()} className="">
                                                   <a className="hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium" href={item.link}>
                                                       {item.name}
                                                   </a>
                                               </li>
                                           </>
                                       )
                                   })
                               }
                               {
                                   theme==="dark" ? (
                                       <BiSolidSun onClick={()=>setTheme("light")} className="text-2xl cursor-pointer"/>
                                   ) : (
                                       <BiSolidMoon onClick={()=>setTheme("dark")} className="text-2xl cursor-pointer"/>
                                   )
                               }
                           </ul>
                       </nav>

                       {/* Mobile view  */}
                       <div className="flex items-center gap-4 md:hidden">
                           {
                             theme==="dark" ? (
                                 <BiSolidSun onClick={()=>setTheme("light")} className="text-2xl cursor-pointer"/>
                             ) : (
                                 <BiSolidMoon onClick={()=>setTheme("dark")} className="text-2xl cursor-pointer"/>
                             )
                           }

                           {/* Mobile Hamburger icon */}
                           {showMenu ? (
                               <IoMdClose
                                   onClick={toggleMenu}
                                   className=" cursor-pointer transition-all"
                                   size={30}
                               />
                           ) : (
                               <HiMenuAlt3
                                   onClick={toggleMenu}
                                   className="cursor-pointer transition-all"
                                   size={30}
                               />
                           )}

                       </div>
                   </div>
               </div>
               <MobileMenu showMenu={showMenu}/>
           </div>
        </>
    );
};

export default Navbar;