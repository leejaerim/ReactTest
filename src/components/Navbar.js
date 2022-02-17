import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData.js';
import './Navbar.css';
import { Button} from 'react-bootstrap';
/* 아이콘 컬러 전체 변경 기능 */
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      {/* 아이콘 컬러 전체 변경 기능 */}
        {/* 네비게이션 토글 코드*/}
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <Button onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <Button />
              </Link>
            </li>
            {/* SidebarData를 순서대로 담기*/}
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
    </>
  );
}
export default Navbar;