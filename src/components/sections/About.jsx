import React from 'react';
import Headshot from '@images/me.png';

export default function About() {
  return (
    <section id="about-section" className="section">
      <div className="section-wrapper">
        <div className="fade-in">
          <h1 className="section-heading">Hey, I'm Brittany.</h1>
          <h3 className="section-subheading">
            I'm a design-minded, detail oriented software engineer passionate about combining
            beautiful code with beautiful design.
          </h3>
          <span className="divider" />
          <div className="about-wrapper">
            {/* <img className="headshot" src={Headshot} alt="headshot" /> */}
            <div className="about-text-wrapper">
              <p className="about-text">
                <strong>I'm a fourth year student at Northeastern University</strong> in Boston
                studying computer science and interaction design. I have experience developing and
                designing software for the web, from simple landing pages to progressive web
                applications. I strive to create software that not only functions efficiently under
                the hood, but also provides intuitive, pixel-perfect user experiences.
              </p>
              <p className="about-text">
                I love learning new and better ways to create seamless user experiences with clean,
                efficient, and scalable code. I consider work an ongoing education, and I'm always
                looking for opportunities to work with those who are willing to share their
                knowledge as much as I want to learn. At the end of the day, my primary goal is to
                create something beautiful with people that bring out the best in me.
              </p>
              <p className="about-text">
                <strong>When I'm not in front of a computer screen,</strong> I'm probably
                snowboarding, traveling, petting dogs, or learning a new song on my uke.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
