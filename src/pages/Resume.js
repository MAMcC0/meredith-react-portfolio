import React from 'react';
import './Resume.css'

export default function Resume() {
    return (
      <div id="resume-deco">
        <h1>Resume </h1>
        <p><a href={require('../photos/Resume.pdf')} download>Download Here</a></p>
      </div>
    );
  }