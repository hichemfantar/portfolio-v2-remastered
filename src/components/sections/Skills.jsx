import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Checkmark from '@images/img/icons/checkmark.svg';

export default function skills() {
  const data = useStaticQuery(graphql`
    query {
      skills: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/skills/" } }
        sort: { fields: [frontmatter___order], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              name
              used
            }
            html
          }
        }
      }
    }
  `);

  const skillsData = data.skills.edges;

  return (
    <section id="skills-section" className="section">
      <div className="section-wrapper">
        <div className="fade-in">
          <h1 className="section-heading">Skills</h1>
          <span className="divider" />
          <div className="skills-flex-wrapper">
            {skillsData &&
              skillsData.map(({ node }, i) => {
                const { name, used } = node.frontmatter;
                if (name === 'tools') {
                  return (
                    <div className="flex-item dev-wrapper">
                      <h2 className="skills-heading">
                        <span className="sprite dev" />
                        <span>Skills</span>
                      </h2>
                      <ul>
                        {used &&
                          used.map((node, i) => (
                            <li key={i} className="dev-item">
                              {node}
                            </li>
                          ))}
                      </ul>
                    </div>
                  );
                }
              })}

            {/* <div className="flex-item design-wrapper">
              <h2 className="skills-heading">
                <span className="sprite design" />
                <span>Design</span>
              </h2>
              <ul>
                {'{'}% for design in site.data.skills.design %{'}'}
                <li className="design-item">
                  <img
                    className="item-img"
                    src="img/icons/{{design.item}}.png"
                    alt="{{design.item}}"
                  />
                </li>
                {'{'}% endfor %{'}'}
              </ul>
            </div> */}

            <div className="flex-item check-wrapper">
              {skillsData &&
                skillsData.map(({ node }, i) => {
                  const { name, used } = node.frontmatter;
                  if (name === 'languages' || name === 'frameworks') {
                    return (
                      <>
                        {name === 'frameworks' && (
                          <div className="tools-wrapper">
                            <h2 className="skills-heading">
                              <span className="sprite tools" />
                              <span>Tools</span>
                            </h2>
                            <ul className="list">
                              {used &&
                                used.map((node, i) => (
                                  <li key={i} className="list-item">
                                    <img className="item-svg" src={Checkmark} alt="checkmark" />
                                    {node}
                                  </li>
                                ))}
                            </ul>
                          </div>
                        )}

                        {name === 'languages' && (
                          <div className="knowledge-wrapper">
                            <h2 className="skills-heading">
                              <span className="sprite knowledge" />
                              <span>Knowledge</span>
                            </h2>
                            <ul className="list">
                              {used &&
                                used.map((node, i) => (
                                  <li key={i} className="list-item">
                                    <img className="item-svg" src={Checkmark} alt="checkmark" />
                                    {node}
                                  </li>
                                ))}
                            </ul>
                          </div>
                        )}
                      </>
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
