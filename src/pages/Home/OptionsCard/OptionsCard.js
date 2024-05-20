import React from 'react';
import OptionsData from './OptionsData';
import implent from "../../../assets/3dimplent.jpeg";
import bejelent from "../../../assets/fog_szek.jpeg";
import csapat from "../../../assets/csapat_kep.jpeg";

import './OptionsCard.css';

const OptionsCard = () => {
  return (
    <div className="courses">
      <div className="coursescard">
        <OptionsData
          image={implent}
          heading="Számítógéppel tervezett implantáció"
          text=" Az implantátumok helyének számítógépes (3D) meghatározására."
          linkTo="/treatment"
        />
        
        <OptionsData
          image={csapat}
          heading="Csapatunk"
          text=" Szakembereink sokéves tapasztalattal rendelkeznek
           a fogászat több területén"
          linkTo="/about"
        />

        <OptionsData
          image={bejelent}
          heading="Bejelentkezés"
          text=" Előre egyeztetett időpontban"
          linkTo="/contact"
        />
      </div>
    </div>
  );
}

export default OptionsCard;
