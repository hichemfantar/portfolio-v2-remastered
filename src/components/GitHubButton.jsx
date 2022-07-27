import React from 'react';
import GitHub from '@images/img/icons/github.svg';
import { socialMedia } from '@config';

export default function GitHubButton() {
  return (
    <a className="block-btn" href={socialMedia[0]?.url} target="_blank" rel="noreferrer">
      <span className="text">See more projects</span>
      <img className="icon" src={GitHub} alt="github" />
    </a>
  );
}
