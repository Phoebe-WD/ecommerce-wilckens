import React from "react";
import "./Footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

export default function Footer() {
  return (
    <div className="FooterEcom">
      <footer>
        <div className="FooterContainer">
          <div className="Copyright">
            <p>&copy; 2021- P. Wilckens Ecommerce</p>
          </div>
          <div className="IconsSocial">
            <a
              href="https://www.instagram.com/shicaap"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://twitter.com/shicaap"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://github.com/Phoebe-WD"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
