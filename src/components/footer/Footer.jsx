import React from "react";

import Link from "../link/Link";
import "./Footer.scss";

const Footer = () => (
  <footer>
    <div className="footer-inner">
      <span>
        <span>&copy; 2017~{new Date().getFullYear()} </span>
        <a
          className="link"
          href="https://o.moonloss.com"
          title="Oh, the moon forgot to be full"
          >
          Oh, the moon forgot to be full
        </a>
      </span>

      {import.meta.env.PACKAGE_VERSION && (
        <span>
          <Link url="https://github.com/zetaoyang/omoonloss">
            I
          </Link>
          <span> &hearts; </span>
          <span>
            <Link url="https://github.com/darekkay/static-marks-app">
            Static Marks
            </Link>
          </span>
          <span> {import.meta.env.PACKAGE_VERSION}</span>
        </span>
      )}
    </div>
  </footer>
);

export default React.memo(Footer);
