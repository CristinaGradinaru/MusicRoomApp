import React, { Component } from 'react'
import JoinRoom from "./JoinRoom";
import CreateRoom from "./CreateRoom";
import Room from "./Room";
import {BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'

export default class Home extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/'><p>This is the home page</p></Route>
                    <Route exact path='/join' component={JoinRoom}></Route>
                    <Route exact path='/create' component={CreateRoom}></Route>
                    <Route exact path='/room/:roomCode' component={Room}></Route>
                </Switch>
            </Router>
        )
    }
}
