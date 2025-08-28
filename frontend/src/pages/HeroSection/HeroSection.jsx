// src/pages/HeroSection/HeroSection.jsx
import React from 'react';
// 引入 Swiper React 组件
import { Swiper, SwiperSlide } from 'swiper/react';
// 引入 Swiper 核心样式
import 'swiper/css';
// 引入 Swiper 功能模块样式
import 'swiper/css/pagination'; // 分页器样式
import 'swiper/css/navigation'; // 导航箭头样式
import 'swiper/css/effect-fade'; // 渐变效果

// 引入我们自己的 CSS
import './HeroSection.css';

// 引入 Swiper 需要的功能模块
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

// 引入图片 (确保你在 src/assets 中有这些图片)
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.png';

// 轮播图的数据
const slideData = [
  {
    image: banner1,
    title: '探索前沿科技',
    description: '我们致力于研究最尖端的科学技术，推动行业发展。',
    link: '/research/tech'
  },
  {
    image: banner2,
    title: '汇聚顶尖人才',
    description: '我们的团队由来自世界各地的优秀研究员组成。',
    link: '/team'
  },
  {
    image: banner3,
    title: '发表卓越成果',
    description: '近年来在顶级期刊和会议上发表了多篇高质量论文。',
    link: '/publications'
  }
];

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Swiper
        // 使用的功能模块
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={30} // Slide 之间的距离
        centeredSlides={true} // 居中幻灯片
        loop={true} // 开启循环播放
        autoplay={{
          delay: 3500, // 自动播放间隔
          disableOnInteraction: false, // 用户操作后不停止自动播放
        }}
        pagination={{
          clickable: true, // 分页器可点击
        }}
        navigation={true} // 开启导航箭头
        effect="fade" // 使用渐变切换效果
        className="mySwiper"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index} className="hero-slide" style={{ backgroundImage: `url(${slide.image})` }}>
            <div className="slide-content">
              <h1 className="slide-title">{slide.title}</h1>
              <p className="slide-description">{slide.description}</p>
              <a href={slide.link} className="slide-button">了解更多</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;