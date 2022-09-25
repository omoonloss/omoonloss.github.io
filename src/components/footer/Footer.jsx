import React from "react";

import Link from "../link/Link";
import "./Footer.scss";

const Footer = () => (
  <footer>
    <div className="footer-inner">
      <span>
        <span>&copy; 2017~{new Date().getFullYear()} </span>
        <Link url="https://o.moonloss.com">Oh, the moon forgot to be full</Link>
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
