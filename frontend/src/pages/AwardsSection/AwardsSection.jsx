import React from 'react';
import AwardCard from '../../components/AwardCard/AwardCard';
import './AwardsSection.css';

// 模拟的奖项数据
const awardsData = {
  "2025": [
    { title: '国家技术发明一等奖', members: '张三、李四、王五', awarder: '国务院' },
    { title: '最佳人工智能应用奖', members: '李四', awarder: '全球AI大会' },
  ],
  "2024": [
    { title: '教育部科技进步特等奖', members: '张三、赵六', awarder: '教育部' },
    { title: 'IEEE 杰出论文奖', members: '王五', awarder: 'IEEE' },
    { title: '“挑战杯”全国金奖', members: '项目团队A', awarder: '共青团中央' },
  ],
  "2023": [
    { title: '省自然科学一等奖', members: '张三', awarder: '省人民政府' },
    { title: '中国计算机学会优秀博士论文', members: '李四', awarder: 'CCF' },
  ],
  "2022": [
    { title: '国际机器人大赛冠军', members: '项目团队B', awarder: 'RoboCup组委会' },
  ],
};

const AwardsSection = () => {
  return (
    <section className="awards-section">
      <div className="awards-content">
        <h2 className="section-title">荣誉与奖项</h2>
        <div className="timeline-container">
          {Object.keys(awardsData).reverse().map(year => (
            <div key={year} className="year-column">
              <h3 className="year-title">{year}</h3>
              <div className="awards-list">
                {awardsData[year].map((award, index) => (
                  <AwardCard key={index} award={award} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;