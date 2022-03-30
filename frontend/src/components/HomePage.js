import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import Room from "./Room";
import CreateRoomPage from "./CreateRoomPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Button, Grid, ButtonGroup, Typography } from "@material-ui/core";
export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  
  async componentDidMount() {
    
  }

  renderHomePage() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} align="center">
          <Typography variant="h3" component="h3">
            PARTYYY!!
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <ButtonGroup disableElevation variant="contained" color="primary"> 
            <Button color="primary" to="/join" component={ Link }>Join A Room</Button>
            <Button color="secondary" to="/create" component={ Link }>Create Room</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {this.renderHomePage}
          </Route>
          <Route path="/join" component={RoomJoinPage} />
          <Route path="/create" component={CreateRoomPage} />
          <Route path="/room/:roomCode" component={Room} />
        </Switch>
      </Router>
    );
  }
}