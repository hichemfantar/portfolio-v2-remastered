import React from 'react';
import Download from '@images/img/icons/download.png';

export default function ResumeButton() {
  return (
    <a className="block-btn" href="/resume.pdf" target="_blank">
      <span className="text">View my full résumé</span>
      <img className="icon" src={Download} alt="download resume" />
    </a>
  );
}
