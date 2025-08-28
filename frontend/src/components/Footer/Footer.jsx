import React from 'react';
import './Footer.css';

const Footer = () => {
  // 获取当前年份
  const currentYear = new Date().getFullYear();

  return (
    // 我们用 section 标签包裹，以便 scroll-snap 生效
    <section className="footer-section"> 
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column about">
            <h3>关于我们</h3>
            <p>
              我们是一个致力于前沿科学研究的实验室，欢迎有志之士的加入。
            </p>
          </div>
          <div className="footer-column links">
            <h3>快速链接</h3>
            <ul>
              <li><a href="/research">研究方向</a></li>
              <li><a href="/team">团队成员</a></li>
              <li><a href="/publications">发表论文</a></li>
              <li><a href="/news">新闻动态</a></li>
            </ul>
          </div>
          <div className="footer-column contact">
            <h3>联系我们</h3>
            <p>地址：XX市XX区XX路123号科技楼</p>
            <p>邮箱：<a href="mailto:contact@lab.edu">contact@lab.edu</a></p>
            <p>电话：(010) 1234 5678</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} 你的实验室名称. All Rights Reserved.</p>
          {/* 这里未来可以放社交媒体图标 */}
        </div>
      </footer>
    </section>
  );
};

export default Footer;