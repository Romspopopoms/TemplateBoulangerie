import React from "react";
import { ReactTyped as Typed } from "react-typed";
import { easeInOut, motion } from "framer-motion";

const Section3 = () => {
    return (
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{opacity: 1, y:0 }}
        transition={{ duration: 1, ease:easeInOut }} 
        className="flex flex-col items-center justify-center h-full w-auto mt-24 md:mt-48 xl:mt-64 bg-black px-4">
            <h1
            className="text-4xl md:text-7xl sm:text-6xl text-primary font-jost font-bold text-center">Notre engagement</h1>
            <Typed
                strings={[
                    `Notre boulangerie s'engage à soutenir la communauté locale. Nous sélectionnons nos ingrédients auprès de producteurs locaux, favorisant ainsi l'économie régionale. Chaque pain et chaque viennoiserie reflètent notre dévouement à offrir des produits frais et de qualité, tout en réduisant notre empreinte écologique. Ensemble, nous cultivons le goût de l'authenticité et du partage.`
                ]}
                typeSpeed={20}
                backSpeed={20}
                backDelay={1500}
                startDelay={1000}
                loop={false}
                showCursor={true}
                className="text-accent font-jost text-xl sm:text-2xl mt-12 font-semibold max-w-[60%] text-center"
            />
        </motion.div>
    );
};

export default Section3;
