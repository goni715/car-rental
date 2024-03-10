import carPic from "../../assets/images/car.png";
import yellowCar from "../../assets/images/banner-car.png";
import {useEffect} from "react";
import AOS from "aos";

const Hero = ({theme}) => {

    useEffect(() => {
        AOS.refresh();
    });

    return (
        <>
           <div className="dark:bg-black dark:text-white duration-300">
               <div className="container min-h-[600px] flex">
                   <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
                       <div
                           data-aos="zoom-in"
                           data-aos-duration="1500"
                           data-aos-once="false"
                           className="order-1 sm:order-2">
                           <img
                               src={theme === "dark" ? carPic : yellowCar}
                               alt=""
                               className=" max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
                           />
                       </div>
                       <div className="order-2 sm:order-1 space-y-5 ">
                           <p data-aos="fade-up" className="text-primary text-2xl font-serif">Effortless</p>
                           <h1 className="text-5xl lg:text-7xl font-semibold font-serif">Car Rental</h1>
                           <p>
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur cum dolor, eligendi error
                           </p>
                           <button className="btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 transition duration-300">Get Started</button>
                       </div>
                   </div>
               </div>
           </div>
        </>
    );
};

export default Hero;