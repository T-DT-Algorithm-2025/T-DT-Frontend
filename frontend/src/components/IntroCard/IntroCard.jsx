import React from 'react';
import './IntroCard.css';

const IntroCard = ({ card }) => {
  // card 对象将包含 image, title, link
  return (
    <a href={card.link} className="intro-card">
      <img src={card.image} alt={card.title} className="card-image" />
      <div className="card-overlay">
        <h3 className="card-title">{card.title}</h3>
      </div>
    </a>
  );
};

export default IntroCard;