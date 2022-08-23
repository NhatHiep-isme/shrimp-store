import { useState } from "react";
import "./header.css";
import logo from "../../assets/logo.jpg";
import { FaBars } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";

export const Header = () => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  const showSidebar = () => {
    setIsShowSidebar(true);
  };
  const closeSidebar = () => {
    setIsShowSidebar(false);
  };

  return (
    <div className="header">
      <div className="img-wrap">
        <img src={logo} alt="sumo tom" />
      </div>
      <div className="navbar">
        <div className="nav-links">
          <a href="google.com">TRANG CHỦ</a>
          <a href="google.com">GIỐNG TÔM</a>
          <a href="google.com">KỸ THUẬT NUÔI</a>
          <a href="google.com">LIÊN HỆ</a>
        </div>
        <div className="hotline">
          <BsFillTelephoneFill className="icon-phone" />
          <div>
            <p>HOTLINE</p>
            <p>0979.615.197</p>
          </div>
        </div>
      </div>
      {isShowSidebar && (
        <div className="sidebar">
          <div className="hotline"></div>
          <div className="nav-links">
            <a href="google.com">TRANG CHỦ</a>
            <a href="google.com">GIỐNG TÔM</a>
            <a href="google.com">KỸ THUẬT NUÔI</a>
            <a href="google.com">LIÊN HỆ</a>
          </div>
          <ImCancelCircle className="icon-cancel" onClick={closeSidebar} />
        </div>
      )}
      {!isShowSidebar && (
        <div className="header-mobile">
          <div className="hotline">
            <BsFillTelephoneFill className="icon-phone" />
            <div>
              <p>HOTLINE</p>
              <p>0979.615.197</p>
            </div>
          </div>{" "}
          <FaBars className="icon-bars" onClick={showSidebar} />
        </div>
      )}
    </div>
  );
};
