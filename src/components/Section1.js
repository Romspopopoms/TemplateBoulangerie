import React from "react";
import { easeInOut, motion } from "framer-motion";
import Photo1 from "../assets/Photo1.jpeg";
import Pain from "../assets/pain.png";
import Sandwich from "../assets/sandwich.png";
import Gâteau from "../assets/gateau.png";
import croissant from "../assets/croissant.png";

const Bouffe = [
    {
        name: "Pain",
        image: Pain
    },
    {
        name: "Sandwich",
        image: Sandwich
    },
    {
        name: "Gâteau",
        image: Gâteau
    },
    {
        name: "Viennoiserie",
        image: croissant
    },
];

const Section1 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-96 w-auto">
            
            <img src={Photo1} alt="Photo1" className="absolute inset-0 w-full blur-sm z-0 min-h-96" />
            <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{opacity: 1, y:0 }}
            transition={{ duration: 1, ease:easeInOut }}
            className="z-10 self-start xl:ml-32 xl:mt-32 mt-12 ml-8 font-jost text-2xl md:text-4xl lg:text-6xl font-bold text-white"
            ><span className="text-[#FFE3CC]">L</span>A <span className="text-[#FFE3CC]">B</span>
            OULANGERIE</motion.h1>
            
            <motion.h2 
            initial={{ opacity: 0, y: 100 }}
            animate={{opacity: 1, y:0 }}
            transition={{ duration: 1, ease:easeInOut, delay:0.3 }}
            className="z-10 self-start xl:ml-32 mt-4 ml-8 font-jost text-2xl sm:text-4xl font-bold text-white">L'art de la boulangerie française à votre portée</motion.h2>
            <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{opacity: 1, y:0 }}
            transition={{ duration: 1, ease:easeInOut }}
            className=" hidden md:flex z-10 xl:mt-56 mt-24 xl:space-x-28 space-x-14 flex-wrap">
                {Bouffe.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col items-center justify-center">
                            <img src={item.image} alt={item.name} className="xl:w-28 w-16 xl:h-28 h-16" />
                            <p className="text-white font-jost font-bold text-4xl mt-6">{item.name}</p>
                            
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default Section1;
