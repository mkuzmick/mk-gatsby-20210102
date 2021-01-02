import React from 'react';

import config from '../../config';

export default function Footer() {
  return (
    <header id="header">
      <h1 style={{marginBottom: "0px"}}>{config.heading}</h1>
      <p style={{fontSize: "1em"}}>
        in studying and practicing rhetoric, we attend to <strong>moves</strong>, <strong>moves</strong> that <strong>move</strong> you, turns of phrase (tropes) you return to again and again, but also tropes you turn to to "make it new." Like juxtaposition, for instance.</p> 
      <p style={{fontSize: "1em"}}>
          In whatever it is that comes after writing, what are the <strong>moves?</strong> Let us know, and we'll add them to our choreography . . . 
      </p>
    </header>
  );
}
