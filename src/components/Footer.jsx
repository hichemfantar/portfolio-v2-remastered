import { socialMedia } from '@config';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export default function Footer() {
  return (
    <section id="footer" className="section">
      <div className="section-wrapper">
        <ul className="soc">
          {socialMedia &&
            socialMedia.map(({ url, name }, i) => (
              <li className="soc-item" key={i}>
                <a
                  href={url}
                  target="_blank"
                  title={name}
                  rel="noreferrer"
                  className={`icon ${name}`}>
                  <span className="text">{name}</span>
                  {/* <img src="/img/social/{{link.title}}.svg" alt={name} /> */}
                </a>
              </li>
            ))}
        </ul>
        <div className="copyright-wrapper center">
          <p>©&nbsp;&nbsp;Designed &amp; Developed by Brittany Chiang 2017</p>
          <p>©&nbsp;&nbsp;Remastered by Hichem Fantar 2022</p>
        </div>
      </div>
    </section>
  );
}
