import { useState } from "react";
import { Link } from "react-router-dom";

import A from "../Marque/A/A";
import B from "../Marque/B/B";
import C from "../Marque/C/C";
import D from "../Marque/D/D";
import E from "../Marque/E/E";
import F from "../Marque/F/F";
import G from "../Marque/G/G";
import H from "../Marque/H/H";
import I from "../Marque/I/I";
import J from "../Marque/J/J";
import K from "../Marque/K/K";
import L from "../Marque/L/L";
import M from "../Marque/M/M";
import N from "../Marque/N/N";
import O from "../Marque/O/O";
import P from "../Marque/P/P";
import Q from "../Marque/Q/Q";
import R from "../Marque/R/R";
import S from "../Marque/S/S";
import T from "../Marque/T/T";
import U from "../Marque/U/U";
import V from "../Marque/V/V";
import W from "../Marque/W/W";
import X from "../Marque/X/X";
import Z from "../Marque/Z/Z";
import Chiffres from "../Marque/Chiffres/Chiffres";

import "./Header.css";

function Header() {
  const URL = import.meta.env.VITE_BACKEND_URL;

  const [showLinks, setShowLinks] = useState(false);

  const handleClickBurger = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="Header">
      <div
        className="Burger_img"
        onClick={handleClickBurger}
        aria-hidden="true"
      >
        <img
          src={`${URL}/public/assets/images/menu-burger.png`}
          alt="menu burger"
        />
        {showLinks && (
          <div>
            <Chiffres />
            <A />
            <B />
            <C />
            <D />
            <E />
            <F />
            <G />
            <H />
            <I />
            <J />
            <K />
            <L />
            <M />
            <N />
            <O />
            <P />
            <Q />
            <R />
            <S />
            <T />
            <U />
            <V />
            <W />
            <X />
            <Z />
          </div>
        )}
      </div>
      <Link to="/">
        <img
          className="Home_Button"
          src={`${URL}/public/assets/images/voiture.png`}
          alt="Logo de voiture pour revenir à la page principale"
        />
      </Link>
    </div>
  );
}

export default Header;
