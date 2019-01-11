/**
 *
 ๏───────────────────────────────────────────────────────────────๏
 │                                                               │
 │                       LAIR APPLICATION                        │
 │               $ npm i && npm build && npm start               │
 │               $ npm build && npm start                        │
 │                                                               │
 ๏───────────────────────────────────────────────────────────────๏
 */


import React, {Component} from 'react';

import {Fade, Button, Jumbotron} from 'reactstrap';
import Header from "./components/layout/Header";

import UserApi from "./api/UserApi";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeIn: true
        };
    }

    render() {
        UserApi.getUsers();
        return (
            <div>
                <Fade in={this.state.fadeIn}>
                    <Header/>
                    <div className="container rounded" style={style.container}>
                        <div className="p-5">
                            <Jumbotron>
                                <h1 className="display-3">Free API</h1>
                                <p className="lead">Simple application based on Node.js / TypeScript API (Loopback 4.0) and ReactjS for severals purposes.</p>
                                <hr className="my-2" />
                                <p className="alert-warning p-3 rounded text-center">Contains only classic items <strong>( v1.2.1 )</strong> </p>
                                <p className="lead">
                                    <Button color="success btn-lg">Get started</Button>
                                </p>
                            </Jumbotron>
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default App;


/*
const style = {

};
font-size: 1.4rem;
background-image: -webkit-linear-gradient( 90deg, #5e0074 0%, #00045b 100% );
background-image: linear-gradient( 90deg, #5e0074 0%, #00045b 100% );
color: white;
-webkit-font-smoothing: antialiased;
*/


const style = {
    container: {
        background: '#4b6cb7'/* fallback for old browsers */,
        background: '-webkit-linear-gradient(to right, #182848, #4b6cb7)', /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to right, #182848, #4b6cb7)'

    }

};