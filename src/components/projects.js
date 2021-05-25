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
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/iVpDXWJ.png?1) center / cover'}}>
            Portfolio Project
          </CardTitle>
          <div class="center-align">
          <CardText>
            My most recent React project would be creating this website.
            With the help of the 'React-MLD' library and <a href="https://paulhanna1933.github.io/">Paul Hanna</a> from YouTube, we have this beautiful website!
          </CardText>
            <CardActions border>
              <a href="https://google.com/" rel="noreferrer" target="_blank">
                <Button colored >Website</Button>
              </a>
              <a href="https://github.com/CallMeTes/callmetes-portfolio" rel="noreferrer" target="_blank">
                <Button colored >Github</Button>
              </a>
            </CardActions>
          </div>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* React - Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/V6sQSsY.png) center / cover'}}>
          My Favorite Links
        </CardTitle>
        <div class="center-align">
        <CardText>
          This homework was to test our skills using App.js and a Link Container.
        </CardText>
          <CardActions border>
            <a href="https://github.com/CallMeTes/favLinks" rel="noreferrer" target="_blank">
              <Button colored >Github</Button>
            </a>
          </CardActions>
        </div>
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
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/cJodL5p.png) center / cover'}}>
            MDBlockchain Project
          </CardTitle>
          <div class="center-align">
          <CardText>
            <b><i>Under Construction</i></b><br />
              My Team and I were challanged to create a blockchain database for a fictional medical center.
              Our success with this project motivated us to continue through the summer to figure out how we can take our project further!
          </CardText>
          <CardActions border>
            <a href="https://github.com/CS-Team-Project-CMP-485-Spring-2021" rel="noreferrer" target="_blank">
              <Button colored >Github</Button>
            </a>
          </CardActions>
          </div>
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
            New York Stock Exchange Data Project
          </CardTitle>
          <CardText>
            This project was to explore equations and utilize the processing power of R with the chosen dataset being the New York Stock Exchange.
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
