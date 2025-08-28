import React from 'react';
import './AwardCard.css';

// props会接收到 award 对象，里面包含 title, members 等信息
const AwardCard = ({ award }) => {
  return (
    <div className="award-card">
      <h4 className="award-title">{award.title}</h4>
      <p className="award-members">{award.members}</p>
      <p className="awarder">{award.awarder}</p>
    </div>
  );
};

export default AwardCard;