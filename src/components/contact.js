import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">

          {/*Left Half Cell*/}
          <Cell col={6}>
            <h2>Tesfa Greaves</h2>
            <img
              src="https://cdn0.iconfinder.com/data/icons/diversity-avatars-vol-4/64/man-beard-afro-african-512.png"
              alt="avatar"
              style={{height: '250px'}}
              />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
              <i className="far fa-envelope" rel="noreferrer" aria-hidden='true'/> <br />
                tesfa.greaves@lc.cuny.edu
            </p>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
