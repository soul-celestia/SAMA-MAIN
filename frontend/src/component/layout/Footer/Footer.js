import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import samalogo from "../../../images/Sama_logo[4]-modified.png";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
     <div className="leftFooter">
        {/*<h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
  <img src={appStore} alt="Appstore" />*/}
  <img src={samalogo} alt="img"/>
  <p>Bring back the balance</p>
  </div>


      <div className="midFooter">
        <h1>SamatheBalance.com</h1>
        <p>Copyrights 2022 &copy; SamatheBalance.com</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <div className="icons">
        <a href="https://www.instagram.com/samathebalance/"><FaInstagram className="instagram"/></a>&nbsp;
        <a href="https://www.facebook.com/samathebalance/"><FaFacebookSquare className="facebook"/></a>&nbsp;
        <a href="https://www.linkedin.com/company/86851185/admin/"><FaLinkedin className="facebook"/></a>&nbsp;
        <a href="https://twitter.com/samathebalance"><FaTwitter className="facebook"/></a>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
