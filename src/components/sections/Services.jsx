import React from 'react';

export default function Services() {
  return (
    <section id="services-section" className="section gap">
      <div
        className="bg"
        data-anchor-target="#services-section"
        data-bottom-top="transform: translate3d(0px, -150px, 0px);"
        data-top-bottom="transform: translate3d(0px, 150px, 0px);"
      />
      <div className="overlay-wrapper">
        <div className="fade-in">
          <h1 className="section-heading">What I Do</h1>
          <span className="divider" />
          <div className="services-wrapper">
            <div className="service-row">
              <div className="service-column">
                <div className="sprite webdev" />
                <h2 className="service-heading">Web Development</h2>
                <p className="service-text">
                  Using HTML, CSS, and JavaScript with pre-processors and build tools such as Sass
                  and Grunt, I have a passion for developing pixel-perfect websites and apps while
                  maintaining a semantic, modular, and DRY code base.
                </p>
              </div>
              <div className="service-column">
                <div className="sprite ui" />
                <h2 className="service-heading">Responsive UI Design</h2>
                <p className="service-text">
                  <strong>
                    <em>
                      "A user interface is like a joke. If you have to explain it, it's not that
                      good."
                    </em>
                  </strong>{' '}
                  I strive to develop and implement responsive and aesthetically pleasing interfaces
                  for websites and apps that adapt to any type of device, platform, or browser.{' '}
                </p>
              </div>
            </div>
            <div className="service-row">
              <div className="service-column">
                <div className="sprite xd" />
                <h2 className="service-heading">Experience Design</h2>
                <p className="service-text">
                  There have been far too many times where I've been trying to accomplish a simple
                  task on a website, and ended up wanting to throw my computer out the window in
                  frustration. Needless to say, user experience is an aspect of software I believe
                  is vital to a successful product.{' '}
                </p>
              </div>
              <div className="service-column">
                <div className="sprite wit" />
                <h2 className="service-heading">Diversity in Tech</h2>
                <p className="service-text">
                  Beyond coding, I am a strong advocate for diversity in the tech industry,
                  especially for women. I currently serve as President for Northeastern's women in
                  tech club,{' '}
                  <a href="http://nuwit.ccs.neu.edu/" target="_blank" rel="noreferrer">
                    NUWIT
                  </a>
                  , and was a 2016{' '}
                  <a href="http://ghc.anitaborg.org/" target="_blank" rel="noreferrer">
                    Grace Hopper Conference
                  </a>{' '}
                  Scholar.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
