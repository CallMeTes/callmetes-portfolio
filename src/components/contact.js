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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce ultrices ligula quis auctor placerat. Etiam pulvinar tortor id lacinia sodales.
              In hac habitasse platea dictumst. Mauris erat lectus, vulputate a varius sed, efficitur dictum felis.              Integer laoreet placerat fermentum. Nullam sit amet leo nibh.
            </p>
          </Cell>

          {/*Right Half Cell*/}
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px'}}>
                    <i className="far fa-envelope" rel="noreferrer" aria-hidden='true'/>
                      tesfa.greaves@lc.cuny.edu
                  </ListItemContent>
                </ListItem>

              </List>
            </div>

          </Cell>

        </Grid>
      </div>
    )
  }
}

export default Contact;
