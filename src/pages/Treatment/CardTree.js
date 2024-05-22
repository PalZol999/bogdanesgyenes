import React, { useState } from 'react';
import './CardTree.css'; // Import your CSS file for additional styling

function CardTree() {
  const [flipped, setFlipped] = useState([false, false, false]);

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <div className="container">
        
      <div className="card-container">
      <div className="vine"></div>

        <div
          className={`card left-card ${flipped[0] ? 'flipped' : ''}`}
          onClick={() => handleFlip(0)}
        >
        <div className="connector left"></div>
          <div className="card-inner">
            <div className="card-front">
            <h3>Implantáció, fogpótlás</h3>
              <p>Ahogy napjainkra a fogászati implantátumok beültetése rutinszerű beavatkozássá vált, úgy pácienseink mindennapos igénye lett, hogy foghiányaik pótlásához ne használjuk a szomszédos fogakat, ne csiszoljuk le azokat…</p>
            </div>
            <div className="card-back">
              <h3>Fogágybetegségek kezelése</h3>
              <p>Ahogy napjainkra a fogászati implantátumok beültetése rutinszerű beavatkozássá vált, 
                úgy pácienseink mindennapos igénye lett, hogy foghiányaik pótlásához ne használjuk a szomszédos fogakat,
                ne csiszoljuk le azokat. Műgyökerek beültetésével lehetőség van egyetlen fog hiányától a teljes 
                fogatlanság rögzített pótlásokkal történő helyreállítására. 
                Rendelőnkben a világ egyik vezető implantátum gyártójának a Nobel Biocare-nek a termékeit használjuk.
                A cég elsőként fejlesztette ki a CT-felvétel alapján tervezett, számítógép-vezérelten gyártott 
                műtéti sablonnal (CAD/CAM) végzett implantációt (NobelGuide). Ez a módszer minimális műtéti feltárás 
                mellett pontos beültetést tesz lehetővé. Bogdán doktor a Nobel Biocare egyik magyarországi mentora, 
                a navigációs sebészet oktatója.</p>
            </div>
          </div>
        </div>
     
        <div
          className={`card right-card ${flipped[1] ? 'flipped' : ''}`}
          onClick={() => handleFlip(1)}
        >
            <div className="connector right"></div>
          <div className="card-inner">
            <div className="card-front">
              <h3>Fogágybetegségek kezelése</h3>
              <p>Napjainkban sajnos a fogakat tartó szövetek megbetegedése egyre gyakrabban előforduló betegség. A legenyhébb formától (ínygyulladás – gingivitis) a legsúlyosabb esetekig (fogágygyulladás – parodontitis) számos formája van.</p>
            </div>
            <div className="card-back">
              <h3>Fogágybetegségek kezelése</h3>
              <p>Napjainkban sajnos a fogakat tartó szövetek megbetegedése egyre gyakrabban előforduló betegség.
                 A legenyhébb formától (ínygyulladás – gingivitis) a legsúlyosabb esetekig 
                 (fogágygyulladás – parodontitis) számos formája van. A folyamat legtöbbször fájdalom nélkül, 
                 észrevétlenül zajlik, aminek a következménye az egyébként sokszor ép fogak elvesztése.A betegség korai 
                 felismerésével és megfelelő kezelésével a fogak megőrizhetőek, és a betegség nyugalomban tartható. A kezelés több lépcsőből áll, és egyénenként eltérő lehet. A megfelelő szájápolás kialakítása és a gyulladást okozó tényezők (lepedék, fogkő, nem megfelelő pontosságú fogpótlások) megszűntetése mellett sokszor sebészi beavatkozásra is szükség lehet ahhoz, hogy az eredmény tartós legyen. 
                 Rendelőnkben ezen beavatkozásokat parodontológus szakorvos végzi, dentálhigiénikus szakasszisztens segítségével.</p>
            </div>
          </div>
        </div>

        <div
          className={`card left-card ${flipped[2] ? 'flipped' : ''}`}
          onClick={() => handleFlip(2)}
        >
          <div className="connector left"></div>
          <div className="card-inner">
            <div className="card-front">
            <h3>Szájsebészet </h3>
              <p>A rendelőnket felkereső páciensek egy részének a hagyományos fogászati kezeléseken 
                túlmenően kisebb-nagyobb sebészeti beavatkozásokra is szüksége van. 
                A köztudatban szájsebészetként ismert szakma valójában két különálló, ugyanakkor…</p>
            </div>
            <div className="card-back">
              <h3>Szájsebészet</h3>
              <p>A rendelőnket felkereső páciensek egy részének a hagyományos fogászati kezeléseken túlmenően 
                kisebb-nagyobb sebészeti beavatkozásokra is szüksége van. A köztudatban szájsebészetként 
                ismert szakma valójában két különálló, ugyanakkor egymás nélkül nehezen működő területet takar. 
                A fogsebészet (dento-alveolaris sebészet) fogorvosi diplomával megszerezhető szakvizsga. 
                A dento-alveolaris sebészet foglalkozik a fogak, bölcsességfogak sebészi eltávolításával, 
                különböző fog eredetű gyulladásos elváltozások, fogakkal összefüggő ciszták eltávolításával, 
                implantátumok (műgyökerek) beültetésével, kisebb mértékű csontpótlások elvégzésével.
                Az arc-állcsont, vagy maxillofaciális sebészetet általános orvosi és fogorvosi diplomával 
                egyidejűleg rendelkező szakemberek végezhetik. A dento-alveolaris beavatkozásokon túlmenően 
                ide tartozik a szájüregi daganatok sebészete, fejlődési rendellenességek, állcsont-rendellenességek 
                sebészeti kezelése, nagyméretű állcsontdefektusok csontpótlása, rekonstrukciója 
                (pl.: csípőcsontból, láb- és koponyacsontokból). Míg a fogsebészeti beavatkozások fogorvosi 
                rendelőben, ambulánsan elvégezhetőek, az arc-, állcsontsebészeti beavatkozások jelentős része 
                fekvőosztályos háttér nélkül nem oldható meg. Rendelőnkben lehetőség van a fogsebészet teljes 
                palettájának magas szintű ellátására. </p>
            </div>
          </div>
        </div>
    
        <div
          className={`card right-card ${flipped[3] ? 'flipped' : ''}`}
          onClick={() => handleFlip(3)}
        >
            <div className="connector right"></div>
          <div className="card-inner">
            <div className="card-front">
            <h3>Esztétikai sebészet – ínysebészet</h3>
              <p>Az esztétikus mosolyt nem csak a szép fogak (fehér esztétika), hanem az egészséges és harmonikus fogíny is meghatározza (rózsaszín esztétika). Sokszor a megfelelő eredmény eléréséhez szükséges az íny sebészi korrekciója.</p>
            </div>
            <div className="card-back">
              <h3>Esztétikai sebészet</h3>
              <p>Az esztétikus mosolyt nemcsak a szép fogak (fehér esztétika), hanem az egészséges és harmonikus fogíny
                 is meghatározza (rózsaszín esztétika). Sokszor a megfelelő eredmény eléréséhez szükség lehet az íny sebészi 
                 korrekciójára.
                 Napjainkban ezek a beavatkozások robbanásszerű fejlődésen mentek keresztül, lehetőség van a szabaddá 
                 vált fognyakak fedésére is.
                 Ezáltal nemcsak a mosoly válik esztétikusabbá, de a fognyaki érzékenység is megszüntethető.
                 Az ínysebészeti beavatkozásokkal megoldható a rövid fogak „meghosszabbítása”, az íny elszíneződéseinek
                 eltüntetése, valamint az implantátumok körül lágyrészek formálása is.</p>
              
              
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default CardTree;


/*




*/