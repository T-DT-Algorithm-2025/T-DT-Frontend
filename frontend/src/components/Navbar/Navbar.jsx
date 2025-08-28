import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">实验室LOGO</a>
      </div>
      <ul className="navbar-links">
        <li><a href="#hero">首页</a></li>
        <li><a href="#awards">研究成果</a></li>
        <li><a href="#intro">关于我们</a></li>
        <li><a href="/join">加入我们</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;