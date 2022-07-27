import React from 'react';
import LogoWhite from '@images/img/logo-white.png';

export default function intro() {
  return (
    <section id="intro-section" className="section">
      <div
        className="bg"
        data-anchor-target="#intro-section"
        data-bottom-top="transform: translate3d(0px, -150px, 0px);"
        data-top-bottom="transform: translate3d(0px, 150px, 0px);"
      />
      <div className="intro-wrapper">
        <div
          className="intro-body"
          data-anchor-target="#intro-section"
          data-top="opacity: 1;"
          data-top-bottom="opacity: 0;">
          <div className="intro-content">
            <h1 className="heading" data-content="Hichem Fantar">
              <span className="name">Hichem Fantar</span>
            </h1>
            <div className="action-wrapper">
              <p className="subtext">
                <a className="btn main-action">Front End Software Engineer</a>
              </p>
            </div>
          </div>
          <div className="scroll-down-wrapper">
            <a href="#about-section" title="About section" className="scroll-down">
              <img className="logo" src={LogoWhite} alt="scroll down" />
              <span className="scroll-down-text">
                Learn More
                <svg
                  className="chevron"
                  viewBox="0 0 57.942 105.958"
                  enableBackground="new 0 0 11.893 6.503">
                  <line
                    fill="none"
                    stroke="#fff"
                    strokeWidth={7}
                    strokeMiterlimit={10}
                    x1="2.475"
                    y1="2.475"
                    x2="55.467"
                    y2="55.466"
                  />
                  <line
                    fill="none"
                    stroke="#fff"
                    strokeWidth={7}
                    strokeMiterlimit={10}
                    x1="55.467"
                    y1="50.492"
                    x2="2.475"
                    y2="103.484"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
