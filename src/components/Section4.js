import React from "react";
import Baguette from "../assets/baguette.png";
import Viennoiserie from "../assets/viennoiseries.png";
import Anniv from "../assets/anniversaire.png";
import Repas from "../assets/repas.png";
import Salade from "../assets/Salade.png";
import Mariage from "../assets/mariage.png";
import Ble from "../assets/champ.png";
import { easeInOut } from "framer-motion";

const Data = [
    {
        image: Baguette,
        title: "Du bon pain",
        description: "Chaque jour, notre pain est pétri et cuit avec le plus grand soin, garantissant une qualité et une fraîcheur incomparables. Découvrez le goût authentique de notre savoir-faire artisanal."
    },
    {
        image: Viennoiserie,
        title: "Nos délices",
        description: "Chaque jour, nos viennoiseries sont façonnées et cuites avec le plus grand soin, garantissant une qualité et une fraîcheur incomparables. Découvrez le goût authentique de notre savoir-faire artisanal."
    },
    {
        image: Anniv,
        title: "Nos gâteaux",
        description: "Chaque jour, nos pâtisseries sont confectionnées avec le plus grand soin, garantissant une qualité et une fraîcheur incomparables. Découvrez le goût authentique de notre savoir-faire artisanal."
    },
    {
        image: Repas,
        title: "De bons sandwichs",
        description: "Chaque jour, nos sandwichs sont préparés avec le plus grand soin, garantissant une qualité et une fraîcheur incomparables. Découvrez le goût authentique de notre savoir-faire artisanal."
    },
    {
        image: Salade,
        title: "Nos salades fraîches",
        description: "Chaque jour, nos salades sont préparées avec le plus grand soin, garantissant une qualité et une fraîcheur incomparables. Découvrez le goût authentique de notre savoir-faire artisanal."
    },
    {
        image: Mariage,
        title: "Vos commandes",
        description: "Chaque jour, vos commandes spéciales sont réalisées avec le plus grand soin, garantissant une qualité et une fraîcheur incomparables. Découvrez le goût authentique de notre savoir-faire artisanal."
    },
];

const Section4 = () => {
    return (
      <div className="relative min-h-screen">
        {/* Arrière-plan avec brightness */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[35%]"
          style={{ backgroundImage: `url(${Ble})`, backgroundPositionY: "top" }}
        ></div>
  
        {/* Contenu au-dessus du background */}
        <div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeInOut }}
          className="relative flex flex-wrap justify-center items-start space-x-12 gap-y-4 mt-32 sm:mt-48 z-10"
        >
          {Data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-start w-full lg:w-1/4 p-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover min-h-[350px] rounded-xl"
              />
              <h1 className="text-2xl text-primary font-jost font-bold text-center mt-4">
                {item.title}
              </h1>
              <p className="text-accent font-jost text-xl mt-4 font-semibold text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Section4;