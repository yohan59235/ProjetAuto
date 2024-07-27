import React from "react";

import "./Abarth.css";

function Abarth() {
  const URL = import.meta.env.VITE_BACKEND_URL;

  return (
    <div>
      <div className="Logo_Abarth">
        <img
          src={`${URL}/public/assets/images/Logo_Abarth.png`}
          alt="Logo de la marque automobile Abarth"
        />
      </div>
      <div className="Abarth_History">
        <h1>Son histoire</h1>
        <div className="Intro_Abarth">
          <p>
            Abarth, est une marque synonyme de performance et de passion
            automobile, elle a une histoire riche et fascinante qui remonte à
            plusieurs décennies.
          </p>
          <p>
            Fondée en 1949 par Carlos Abarth, un ingénieur et pilote autrichien
            passionné par la vitesse et l'innovation, la marque est rapidement
            devenue une référence dans le monde des voitures de sport.
          </p>
        </div>
        <h2>Les débuts de Carlos Abarth</h2>
        <div className="Abarth_Debut">
          <p>
            Carlos Abarth, né en 1908 à Vienne, a commencé sa carrière dans le
            monde de la moto avant de se tourner vers les voitures. Sa passion
            pour la vitesse et son esprit novateur l'ont conduit à créer sa
            propre entreprise après la Seconde Guerre mondiale.
          </p>
          <p>
            En 1949, avec l'aide de son ami et pilote Guido Scagliarini, il
            fonde Abarth & Co à Turin, en Italie.
          </p>
          <p>
            Dès le début, la marque se distingue par ses voitures performantes
            et ses accessoires de tuning destinés à améliorer les performances
            des véhicules de série.
          </p>
        </div>
        <h2>Les premiers succès</h2>
        <div>
          <p>
            Les premières créations d'Abarth se concentrent sur l'amélioration
            des modèles Fiat.
          </p>
          <p>
            En 1950, Abarth lance le modèle de l'Abarth 204A, basé sur une Fiat
            1100, qui remporte de nombreuses courses et établit des records de
            vitesse. Ces succès permettent à la marque de se faire une nom dans
            le monde des courses automobiles.
          </p>
        </div>
        <h2>La montée en puissance dans les années 60</h2>
        <div>
          <p>
            Les années 60 marquent une période de croissance exponentielle pour
            Abarth.
          </p>
          <p>
            La collaboration étroite avec Fiat permet à Abarth de créer des
            modèles emblématiques tels que l'abarth 595 et l'Abarth 695, des
            versions sportives et performantes de la Fiat 500.
          </p>
          <p>
            Ces modèles deviennent des icônes de la marque, célèbres pour leur
            agilité et leur puissance.
          </p>
        </div>
        <h2>Abarth et le monde de la compétition</h2>
        <div>
          <p>
            Abarth se forge une réputation solide dans le monde de la
            compétition automobile.
          </p>
          <p>
            La marque remporte de nombreuses courses, notamment dans les
            catégories de voitures de tourisme et de rallye.
          </p>
          <p>
            Les voitures Abarth sont reconnues pour leur performance
            exceptionnelles, leur maniabilité et leur fiabilité, ce qui en fait
            des choix populaires parmi les pilotes amateurs et professionnels.
          </p>
        </div>
        <h2>L'évolution moderne</h2>
        <div>
          <p>
            En 1971, Abarth est rachetée par Fiat, intégrant ainsi ses
            technologies et son savoir-faire au sein du groupe automobile.
          </p>
          <p>
            La marque continue de produire des modèles performants et innovants,
            tout en maintenant l'esprit de compétition et d'excellence qui a
            fait sa renommée.
          </p>
          <p>
            Aujourd'hui, Abarth est synonyme de sportivité et de passion pour
            les voitures de haute performance. Les modèles modernes, tels que
            l'Abarth 124 spider et l'Abarth 595, perpétuent l'héritage de Carlos
            Abarth en offrant des expériences de conduite exaltantes et uniques.
          </p>
        </div>
        <h2>Conclusion</h2>
        <div>
          <p>
            L'histoire d'Abarth est celle d'une marque qui a su allier
            innovation, performance et passion pour devenir une légende dans le
            monde automobile.
          </p>
          <p>
            Des débuts modestes aux victoires en compétitions, en passant pas
            des modèles emblématiques, Abarth continue d'inspirer et de fasciner
            les amateurs de voitures sportives à travers le monde.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Abarth;
