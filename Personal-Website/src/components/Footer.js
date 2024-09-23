import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/artem._.zagaynov/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
        <a href="https://x.com/SharkBoi289" target="_blank" rel="noopener noreferrer">
        <TwitterIcon />
        </a>
        <a href="https://www.linkedin.com/in/artem-zagaynov-86b7511b2" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon style={{ fill: "white" }} />
        </a>
      </div>
      <p> &copy; 2024 ArtemsPortfol.io</p>
    </div>
  );
}

export default Footer;
