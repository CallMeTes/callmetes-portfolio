import React from 'react';
import { Grid, Cell } from 'react-mdl';

function LandingPage() {
  return (
    <div style={{width: '100%', margin: 'auto'}}>
      <Grid className="landing-grid">
        <Cell col={12}>
        <img
          src="https://cdn0.iconfinder.com/data/icons/diversity-avatars-vol-4/64/man-beard-afro-african-512.png"
          alt="avatar"
          className="avatar-img"
        />

        <div className="banner-text">
          <h1>Full Stack Web Developer</h1>
          <hr/>
          <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | Node.JS | Express | MongoDB </p>

          <div className="social-links">

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/tesfa-greaves/" rel="noreferrer" target="_blank">
              <i className="fab fa-linkedin" rel="noreferrer" aria-hidden='true' />
            </a>

            {/* GitHub */}
            <a href="https://github.com/CallMeTes" rel="noreferrer" target="_blank">
              <i className="fab fa-github-square" rel="noreferrer" aria-hidden='true' />
            </a>

          </div>
        </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default LandingPage;
