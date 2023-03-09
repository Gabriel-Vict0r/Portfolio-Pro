import React from "react";
import {
  DiJavascript,
  DiCss3,
  DiReact,
  DiSass,
  DiNodejsSmall,
} from "react-icons/Di";
import {
  SiJquery,
  SiMongodb,
} from "react-icons/Si";
import { AiFillHtml5 } from "react-icons/Ai";
import { GiJesterHat } from "react-icons/Gi";
import IconHab from "./icon/IconHab";
import '../sass/components/habilities.sass'
const Habilities = () => {
  return (
    <section className="habilities">
      <div className="habilities-container">
        <h2 className="habilities-container-title">Habilidades</h2>
        <div className="habilities-container-icons">
          <IconHab iconName={<AiFillHtml5 />} name="HTML5" />
          <IconHab iconName={<DiCss3 />} name="CSS3" />
          <IconHab iconName={<DiJavascript />} name="Javascript" />
          <IconHab iconName={<DiReact />} name="ReactJs" />
          <IconHab iconName={<DiSass />} name="SASS" />
          <IconHab iconName={<DiNodejsSmall />} name="NodeJs" />
          <IconHab iconName={<SiMongodb />} name="Mongodb" />
          <IconHab iconName={<GiJesterHat />} name="Testes Unitários" />
        </div>
      </div>
      <img src="src/img/habilities/Elemento.svg" alt="elemento decorativo" className="element-hab"/>
    </section>
  );
};

export default Habilities;
