import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li>
              <a href={url} class={`icon ${icon}`}>
                <span class="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>another daily MK Gatsby site</li>
        <li>
          <a href="https://github.com/mkuzmick/mk-gatsby-20210102">Github repo</a> 
        </li>
        <li>
          <a href="https://arthistoryproject.com/artists/albrecht-durer/of-the-just-shaping-of-letters/shaping-the-letters/">Dürer on the just shaping of letters = a hint of what comes next</a>
        </li>
      </ul>
    </footer>
  );
}
