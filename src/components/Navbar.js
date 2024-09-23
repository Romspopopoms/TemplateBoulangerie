import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";

const Data = [
    {
        name: "Accueil",
        link: "#section1"
    },
    {
        name: "Un savoir-faire",
        link: "#section2"
    },
    {
        name: "Nos Produits",
        link: "#section4"
    },
    {
        name: "Nous contacter",
        link: "#section5"
    }
];

const Navbar = ({ isVisible }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1 }}
            className={`fixed w-full h-16 flex items-center bg-white ${isVisible ? 'z-50' : 'z-0'}`}>
            <a href="/" className="ml-6 font-jost font-bold text-4xl text-[#591527] tracking-tighter">
                <h1>
                    <span className="text-[#A6654E] font-jost font-bold text-4xl sm:text-4xl">L</span>a&nbsp;
                    <span className="text-[#A6654E] font-jost font-bold text-4xl sm:text-4xl">B</span>oulangerie
                </h1>
            </a>
            <nav className="ml-auto flex items-center space-x-4 mr-6">
                <div className="hidden md:flex space-x-4">
                    {Data.map((item, index) => (
                        <a 
                            key={index}
                            href={item.link}
                            className="text-[#591527] font-jost text-sm font-semibold"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-[#591527] text-3xl focus:outline-none">
                        <FiMenu />
                    </button>
                </div>
            </nav>
            {menuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white flex flex-col items-center shadow-md">
                    {Data.map((item, index) => (
                        <a 
                            key={index}
                            href={item.link}
                            onClick={() => setMenuOpen(false)}
                            className="text-[#591527] font-jost text-sm py-2"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </motion.div>
    );
};

export default Navbar;
