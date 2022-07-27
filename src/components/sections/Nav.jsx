import React, { useEffect, useRef, useState } from 'react';
import routes from './routes';
import LogoWhite from '@images/img/logo-white.png';
import jQuery from 'jquery';

export default function Nav() {
  const hamburger = useRef(null);
  const overlay = useRef(null);

  function toggleMenu() {
    hamburger.current.classList.toggle('active');
    overlay.current.classList.toggle('open');
    document.body.classList.toggle('noScroll');
  }

  function updateNavigation() {
    jQuery('.section').each(function () {
      const activeSection = jQuery(`#dot-nav a[href="#${jQuery(this).attr('id')}"]`).data('number');
      const offsetTop = jQuery(this).offset().top;
      const halfWindowHeight = jQuery(window).height() / 2;
      const distanceFromTop = jQuery(window).scrollTop();
      const cond1 = offsetTop - halfWindowHeight < distanceFromTop;
      const cond2 = offsetTop + jQuery(this).height() - halfWindowHeight > distanceFromTop;
      if (cond1 && cond2) {
        jQuery('#dot-nav a').eq(activeSection).addClass('is-selected');
      } else {
        jQuery('#dot-nav a').eq(activeSection).removeClass('is-selected');
      }
    });
  }

  useEffect(() => {
    // updateNavigation();
    // window.addEventListener('scroll', updateNavigation, { passive: true });
    // return () => {
    //   window.removeEventListener('scroll', updateNavigation);
    // };
  }, []);

  return (
    <>
      <nav id="dot-nav">
        <ul>
          {routes.map((route, idx) => (
            <li className="dot-container" key={idx}>
              <a href={`#${route.section}-section`} data-number={`#${route.number}`}>
                <span className="dot" />
                <span className="dot-label">{route.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div id="toggle" className="container" ref={hamburger} onClick={toggleMenu}>
        <span className="line top" />
        <span className="line middle" />
        <span className="line bottom" />
      </div>
      <div id="overlay" className="overlay" ref={overlay}>
        <div className="logo">
          <img className="logo-img" src={LogoWhite} alt="logo" />
          <span>Hichem Fantar</span>
        </div>
        <nav className="overlay-menu">
          <ul className="menu-container">
            {routes.map((route, idx) => (
              <li className="menu-item" key={idx}>
                <a
                  href={`#${route.section}-section`}
                  data-number={`#${route.number}`}
                  onClick={toggleMenu}>
                  {route.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
