import { Layout } from '@components';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const NotFoundPage = ({ location }) => {
  const particlesInit = async main => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  useEffect(() => {
    const body = document.querySelector('body');

    body.classList.add('four-oh-four');
  }, []);

  const content = (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: '#0d47a1',
            },
          },
          fpsLimit: 120,
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 700,
              },
            },
            color: {
              value: '#ffffff',
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000',
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: 'img/github.svg',
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.75,
              random: false,
              anim: {
                enable: false,
                speed: 0.25,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 50,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 100,
              color: '#ffffff',
              opacity: 0.7,
              width: 0.5,
            },
            move: {
              enable: true,
              speed: 3,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 700,
                rotateY: 1400,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
              onclick: {
                enable: true,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 100,
                duration: 0.3,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
        }}
      />

      <div className="text-container">
        <div className="text">
          <h1>404</h1>
          <h3>Houston, we have a problem.</h3>
          <a href="/">Back to Earth &nbsp;🚀</a>
        </div>
      </div>
      <div className="count-particles">
        <span className="js-count-particles">--</span> particles{' '}
      </div>
    </>
  );

  return (
    <Layout location={location}>
      <Helmet title="Page Not Found" />

      {content}
    </Layout>
  );
};

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NotFoundPage;
