import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export default function experience() {
  const data = useStaticQuery(graphql`
    query {
      experience: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/experience/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              company
              url
              time
              position
            }
            html
          }
        }
      }
    }
  `);

  const experienceData = data.experience.edges;

  return (
    <section id="experience-section" className="section gap">
      <div
        className="bg"
        data-anchor-target="#experience-section"
        data-bottom-top="transform: translate3d(0px, -150px, 0px);"
        data-top-bottom="transform: translate3d(0px, 150px, 0px);"
      />
      <div className="overlay-wrapper">
        <div className="fade-in">
          <div className="center">
            <h1 className="section-heading">Experience</h1>
            <span className="divider center" />
            <p className="experience-description">
              Thanks to Northeastern's co-op program, I've had the privilege of completing two
              awesome six-month co-ops as a Creative Technologist at{' '}
              <a href="http://us.mullenlowe.com/" target="_blank" rel="noreferrer">
                MullenLowe U.S.
              </a>{' '}
              and Software Engineer at{' '}
              <a href="https://starry.com/" target="_blank" rel="noreferrer">
                Starry
              </a>
              . Starting in July 2017, I'll be joining the iTunes team at{' '}
              <a href="https://apple.com/" target="_blank" rel="noreferrer">
                Apple
              </a>{' '}
              as a UI Engineer for my third and final co-op!
            </p>
          </div>
          <div className="experience-wrapper">
            <div id="timeline">
              {experienceData &&
                experienceData.map(({ node }, i) => {
                  const { company, url, time, position } = node.frontmatter;

                  return (
                    <div className="timeline-block" key={i}>
                      <div className="timeline-content">
                        <h2 className="position">{position}</h2>
                        <h3 className="company">
                          <a href={url} target="_blank" rel="noreferrer">
                            {company}
                          </a>
                        </h3>
                        {/* <p className="job-desc">
                    {'{'}
                    {'{'}item.description{'}'}
                    {'}'}
                  </p> */}
                      </div>
                      <div className="timeline-img">
                        <div className="sprite industry {{item.sprite}}" />
                      </div>
                      <span className="date">{time}</span>
                    </div>
                  );
                })}
            </div>
            <i className="down-arrow" />
          </div>
        </div>
      </div>
    </section>
  );
}
