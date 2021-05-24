import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton } from 'react-mdl';

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if(this.state.activeTab === 0) {
      {/* React Tab */}
      return (
        <div className="projects-grid">

          {/* React - Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>
            React Project #1
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce ultrices ligula quis auctor placerat.
            Etiam pulvinar tortor id lacinia sodales.
            In hac habitasse platea dictumst.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

          {/* React - Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>
            React Project #2
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce ultrices ligula quis auctor placerat.
            Etiam pulvinar tortor id lacinia sodales.
            In hac habitasse platea dictumst.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

          {/* React - Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>
              React Project #3
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce ultrices ligula quis auctor placerat.
              Etiam pulvinar tortor id lacinia sodales.
              In hac habitasse platea dictumst.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
      )
    } else if (this.state.activeTab === 1) {
      {/* MongoDB Tab */}
      return (
        <div className="projects-grid">

          {/* MongoDB - Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>
            MongoDB Project #1
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce ultrices ligula quis auctor placerat.
            Etiam pulvinar tortor id lacinia sodales.
            In hac habitasse platea dictumst.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

          {/* MongoDB - Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>
            MongoDB Project #2
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce ultrices ligula quis auctor placerat.
            Etiam pulvinar tortor id lacinia sodales.
            In hac habitasse platea dictumst.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

          {/* MongoDB - Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>
              MongoDB Project #3
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce ultrices ligula quis auctor placerat.
              Etiam pulvinar tortor id lacinia sodales.
              In hac habitasse platea dictumst.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
      )
    } else if (this.state.activeTab === 2) {
      {/* R Tab */}
      return (
        <div className="projects-grid">

          {/* R - Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://media.istockphoto.com/videos/stock-market-bar-graph-trading-video-id1026933968?s=640x640) center / cover'}}>
            R Project #1
          </CardTitle>
          <CardText>
            New York Stock Exchange Data Project in R
          </CardText>
          <div class="center-align">
            <CardActions border>
              <a href="https://sites.google.com/view/tgreaves-mat327-fa20/" rel="noreferrer" target="_blank">
                <Button colored >Website</Button>
              </a>
              <a href="https://github.com/CallMeTes/MAT327-FA2020" rel="noreferrer" target="_blank">
                <Button colored >Github</Button>
              </a>
            </CardActions>
          </div>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

          {/* R - Project 2
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>
            R Project #2
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce ultrices ligula quis auctor placerat.
            Etiam pulvinar tortor id lacinia sodales.
            In hac habitasse platea dictumst.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        */}

          {/* R - Project 3
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>
              R Project #3
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce ultrices ligula quis auctor placerat.
              Etiam pulvinar tortor id lacinia sodales.
              In hac habitasse platea dictumst.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          */}

        </div>
      )
    }  else if (this.state.activeTab === 3) {
      {/* Java Tab */}
      return (
        <div className="projects-grid">

          {/* Java - Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>
            Java Project #1
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce ultrices ligula quis auctor placerat.
            Etiam pulvinar tortor id lacinia sodales.
            In hac habitasse platea dictumst.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

          {/* Java - Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>
            Java Project #2
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce ultrices ligula quis auctor placerat.
            Etiam pulvinar tortor id lacinia sodales.
            In hac habitasse platea dictumst.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

          {/* Java - Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>
              Java Project #3
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce ultrices ligula quis auctor placerat.
              Etiam pulvinar tortor id lacinia sodales.
              In hac habitasse platea dictumst.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId})}
          ripple
        >
          <Tab>React</Tab>
          <Tab>MongoDB</Tab>
          <Tab>R</Tab>
          <Tab>Java</Tab>

        </Tabs>


        <Grid>
          <Cell col={12}>
            <div className="content">
              {this.toggleCategories()}
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Projects;
