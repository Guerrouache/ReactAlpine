
import React, { useState } from 'react';
import './acc.css';
import image10 from '../../Assets-TP-Alpine/images/sources-homepage/design/duo-left.jpg';
import image11 from '../../Assets-TP-Alpine/images/sources-homepage/design/duo-right.jpg';
import ImageSlider from '../Slider/imageSlider';
import Info from '../info/info';
import { Link } from 'react-router-dom';

function Acc() {
  const [showImage, setShowImage] = useState(true);

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <div className='Résumé bg-dark'>
      <ImageSlider/>  
      <div>
        <h2 className='title text-light'>MADE BY RACERS</h2>
        <p className='text text-light'>
          En 1955, Jean Rédélé, entrepreneur passionné, fonde Alpine sur trois piliers :
          <br></br> agilité, élégance, esprit de compétition.
        </p>

        <p className='text-light'>
          Conçue par des pilotes pour ceux qui veulent maîtriser l’asphalte, la
          <br></br> légende Alpine s’est érigée à travers des victoires mythiques, et un
          <br></br> engagement sportif sans limite.
        </p>

        <p className='text-light'>
          Depuis 2016, à travers notre nouvelle gamme A 110, nous continuons à<br></br> gravir tous
          les échelons du sport automobile. Demain, nous voulons<br></br> réinventer la sportivité
          automobile avec des technologies innovantes<br></br> issues de la Formule 1, pour des
          pilotes passionnés.
        </p>
      </div>
      <br></br>
      <br></br>

      <div>
        <h1 className='Model text-light'>Découvrez notre nouveau modele A110 </h1>
        {showImage ? (
          <Link to='/configure'>
          <img src={image10} alt='voiture' className='voiture' onMouseOver={toggleImage} style={{ width: '30%' }} />
          </Link>
        ) : (
          <Link to='/configure'>
          <img src={image11} alt='voiture' className='voiture' onMouseOver={toggleImage} style={{ width: '30%' }} />
          </Link>
        )}
      

        <p className='text-light'>
          La nouvelle A110 est fidèle à l’esprit de son illustre aînée. Agile, <br></br>compacte et
          légère, elle offre un plaisir de conduite inégalé.
        </p>
      </div>
      <Info/> 
    </div>
  );
}



export default Acc