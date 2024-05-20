import React from "react";

import "./AboutInfo.css";

const AboutInfo = () => {
  return (
    <div className="section">
      <div className="container grid-container">
        <div>
          <div className="about-info-content">
            <h2 className="heading-secondary">
              Színvonalas <span>környezet</span>
            </h2>

            <h5>Rövide bemutatkozás rólunk</h5>

            <p>
            2012.-ben alakult{" "}
              <span className="special-word">Gyenes Rita és Bogdán Sándor </span>  fogorvosi, illetve szájsebészeti magánrendelőinek összevonása révén.
              <br/>
            
            
              A rendelő kialakításában több mint 15 évnyi magánorvosi, valamint klinikai oktatói-gyógyítói tapasztalat segített. Célunk az volt, 
              hogy a fogászat minden szakterülete képviselve legyen, és így csapatmunka keretében tudjunk magas színvonalú ellátást biztosítani 
              pácienseink számára. 
          
              <br/>
              {" "}
            
              </p>

            <blockquote>
            Szakembereink sokéves tapasztalattal rendelkeznek a fogmegtartó és esztétikai fogászat, a fogágybetegségek kezelésének területén, valamint a hagyományos, illetve implantációs fogpótlások készítésben.
            </blockquote>
          </div>
        </div>

        <div>
          <div className="about-info-content">
            <h2 className="heading-secondary">
              Kíváló <span>szaktudás</span>
            </h2>

            <h5>Az orvosainkról</h5>

            <p>
            Bogdán doktor majdnem <span className="special-word">20 éve </span> arc-, állcsont- és szájsebészeti gyakorlattal rendelkezik a nagy kiterjedésű 
            állcsontdefektusok rekonstrukciója, implantációt megelőző csontpótlások, illetve a szájüregi daganatos betegek ellátása terén. 
             {" "}
              
            </p>

            <blockquote>
            A szakmai színvonalon túl fontos szempont volt számunkra, hogy betegeinknek nyugodt, barátságos légkört biztosítsunk a várakozás 
            és a beavatkozások alatt,
            </blockquote>

            <p>
            így a rendelő hangulatát is ennek megfelelően alakítottuk ki.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
