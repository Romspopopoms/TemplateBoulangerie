import React from "react";
import { motion, easeInOut } from "framer-motion";
import { ReactTyped as Typed } from "react-typed";

const Section5 = () => {
    return (
        <div className="flex flex-col justify-center items-center h-full w-full mt-24 p-12">
            <motion.h1 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: easeInOut }} 
                className="text-4xl sm:text-7xl text-primary font-jost font-bold text-center mt-8">
                Retrouvez-nous
            </motion.h1>
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8 mt-12 sm:mt-32 mb-12">
                <Typed
                    strings={[
                        `La Boulangerie,<br />
                        Av. Gustave Eiffel,<br />
                        75007 Paris<br /><br />
                        06 07 08 09 01<br /><br />
                        LaBoulangerie@lebonpain.com`
                    ]}
                    typeSpeed={15}
                    backSpeed={20}
                    backDelay={1500}
                    startDelay={1000}
                    loop={false}
                    showCursor={true}
                    className="sm:place-self-end text-2xl sm:text-3xl text-accent font-jost font-semibold sm:text-end text-center"
                />
                <div className="place-self-center sm:place-self-start">
                    <iframe
                        title="La Boulangerie Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.990704538188!2d2.292292615674471!3d48.85884407928754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fcdce2eae01%3A0x8d7b4b9df5aebff0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1626966300975!5m2!1sen!2sfr"
                        width="310"
                        height="252"
                        className="rounded-lg"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Section5;
