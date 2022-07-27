import '@styles/_scss/main.scss';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import {
  Contact,
  GitHubButton,
  Portfolio,
  Intro,
  ResumeButton,
  Skills,
  Layout,
  Footer,
  Services,
  About,
  Experience,
  Nav,
} from '@components';

const IndexPage = ({ location }) => {
  useEffect(() => {
    const dotNav = document.querySelector('#dot-nav');
    const about = document.querySelector('#about-section');
    const hamburger = document.querySelector('#toggle');
    const overlay = document.querySelector('#overlay');

    function handleNavs() {
      const isDesktop = window.innerWidth > 768;
      const topOfAbout = about.offsetTop - about.offsetTop / 4;
      const isBelowIntro = window.scrollY > topOfAbout;
      const menuOpen = overlay.classList.contains('open');

      if (isDesktop && isBelowIntro) {
        dotNav.classList.add('active');
      } else if (isDesktop && menuOpen) {
        toggleMenu();
      } else {
        dotNav.classList.remove('active');
      }
    }

    window.addEventListener('scroll', handleNavs, { passive: false });
    window.addEventListener('resize', handleNavs, { passive: false });

    // Toggle mobile menu open and closed
    function toggleMenu() {
      hamburger.classList.toggle('active');
      overlay.classList.toggle('open');
      document.body.classList.toggle('noScroll');
    }

    // const isMobile = {
    //   Android: function () {
    //     return navigator.userAgent.match(/Android/i);
    //   },
    //   BlackBerry: function () {
    //     return navigator.userAgent.match(/BlackBerry/i);
    //   },
    //   iOS: function () {
    //     return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    //   },
    //   Opera: function () {
    //     return navigator.userAgent.match(/Opera Mini/i);
    //   },
    //   Windows: function () {
    //     return navigator.userAgent.match(/IEMobile/i);
    //   },
    //   any: function () {
    //     return (
    //       isMobile.Android() ||
    //       isMobile.BlackBerry() ||
    //       isMobile.iOS() ||
    //       isMobile.Opera() ||
    //       isMobile.Windows()
    //     );
    //   },
    // };
    // turn off parallax effect on mobile devices
    // if (!isMobile.any()) {
    //   skrollr.init({
    //     render: function (data) {
    //       //Debugging - Log the current scroll position.
    //       // console.log(data.curTop);
    //     },
    //     smoothScrolling: false,
    //     forceHeight: false,
    //   });
    // }
    // toggle contact input classes on focus or blur
    // const contactInput = document.querySelectorAll('.contact-input');
    // function focusInput() {
    //   this.parentElement.classList.add('is-active', 'is-completed');
    // }
    // function blurInput() {
    //   this.parentElement.classList.remove('is-active', 'is-completed');
    // }
    // contactInput.forEach(input => input.addEventListener('focus', focusInput));
    // contactInput.forEach(input => input.addEventListener('blur', blurInput));
    // dynamically expand textarea
    // const textarea = document.querySelector('#message');
    // const limit = 300;
    // function autoExpand() {
    //   textarea.style.height = '';
    //   textarea.style.height = `${Math.min(textarea.scrollHeight, limit)}px`;
    // }
    // textarea.addEventListener('input', autoExpand);

    return () => {
      window.removeEventListener('scroll', handleNavs, { passive: false });
      window.removeEventListener('resize', handleNavs, { passive: false });
    };
  }, []);

  return (
    <Layout location={location}>
      <Nav />
      <div id="skrollr-body">
        <Intro />
        <About />
        <Services />
        <Skills />
        <Experience />
        <ResumeButton />
        <Portfolio />
        <GitHubButton />

        <Contact />
        <Footer />
      </div>
    </Layout>
  );
};

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
