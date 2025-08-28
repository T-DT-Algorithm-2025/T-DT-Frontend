import React from 'react';
import IntroCard from '../../components/IntroCard/IntroCard';
import './IntroSection.css';

// 引入图片
import researchImg from '../../assets/banner1.png';
import teamImg from '../../assets/banner1.png';
import pubsImg from '../../assets/banner1.png';

// 卡片数据
const introData = [
  {
    image: researchImg,
    title: '研究方向',
    link: '/research'
  },
  {
    image: teamImg,
    title: '团队成员',
    link: '/team'
  },
  {
    image: pubsImg,
    title: '发表论文',
    link: '/publications'
  }
];

const IntroSection = () => {
  return (
    <section className="intro-section">
      <h2 className="section-title">了解更多</h2>
      <div className="card-grid">
        {introData.map((card, index) => (
          <IntroCard key={index} card={card} />
        ))}
      </div>
    </section>
  );
};

export default IntroSection;