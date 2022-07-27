import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export default function Portfolio() {
  const data = useStaticQuery(graphql`
    query {
      otherProjects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/projects/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              name
              url
              description
              used
            }
            html
          }
        }
      }
    }
  `);

  const otherProjectsData = data.otherProjects.edges;

  return (
    <section id="portfolio-section" className="section">
      <div className="section-wrapper">
        <div className="fade-in">
          <h1 className="section-heading">Some of My Work</h1>
          <span className="divider" />
          <div className="portfolio-item-wrapper">
            {otherProjectsData &&
              otherProjectsData.map(({ node }, i) => {
                const { name, url, description, used } = node.frontmatter;
                return (
                  <>
                    <div className="portfolio-row">
                      {/* <div className="screenshots {% if project.title == 'Screentime 2.0' %}screentime{% endif %}">
                {'{'}% if project.title == {'"'}Screentime 2.0{'"'} %{'}'}
                <img
                  className="img-{{project.img}}"
                  src="img/portfolio/{{project.img}}/{{project.img}}-1.jpg"
                  alt="screentime-1"
                />
                <img
                  className="img-{{project.img}}"
                  src="img/portfolio/{{project.img}}/{{project.img}}-2.jpg"
                  alt="screentime-2"
                />
                <img
                  className="img-{{project.img}}"
                  src="img/portfolio/{{project.img}}/{{project.img}}-3.jpg"
                  alt="screentime-3"
                />
                <img
                  className="img-{{project.img}}"
                  src="img/portfolio/{{project.img}}/{{project.img}}-4.jpg"
                  alt="screentime-4"
                />
                {'{'}% else %{'}'}
                <img
                  className="img-lg"
                  src="img/portfolio/{{project.img}}/{{project.img}}.jpg"
                  alt="desktop-screenshot"
                />
                <img
                  className="img-md"
                  src="img/portfolio/{{project.img}}/{{project.img}}-tablet.jpg"
                  alt="tablet-screenshot"
                />
                <img
                  className="img-sm"
                  src="img/portfolio/{{project.img}}/{{project.img}}-mobile.jpg"
                  alt="mobile-screenshot"
                />
                {'{'}% endif %{'}'}
              </div> */}
                      <div className="description-title-container">
                        <h2 className="description-title">{name}</h2>
                        {/* <div className="description-buttons">
                          <a href="{{project.demo}}" target="_blank">
                            Demo
                          </a>
                          {'{'}% if project.code %{'}'}
                          <a href="{{project.code}}" target="_blank">
                            Code
                          </a>
                          {'{'}% endif %{'}'}
                        </div> */}
                      </div>
                      <p className="portfolio-description">{description}</p>
                      <div className="used">
                        <ul className="used-items">
                          {used &&
                            used.map((node, i) => (
                              <li className="used-item" key={i}>
                                {node}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                    <span className="divider" />
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
