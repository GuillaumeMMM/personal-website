import React, { Component } from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {
    BrowserRouter as Router, Link } from 'react-router-dom';
import pa1 from '../../assets/pa1.png';
import pa2 from '../../assets/pa2.png';
import pa4 from '../../assets/pa4.png';

class PositiveActions extends Component {
    render() {
        return (
            <div className="positive-actions-container">
                 <Link className="link" to={process.env.PUBLIC_URL + '/'}>
                        <KeyboardBackspaceIcon className="back-icon"></KeyboardBackspaceIcon>
                </Link>
                <h3>Positive Actions</h3>
                <p>As a member of the <strong>PA collective</strong> of developers and designers willing to bring relevant environmental tools to their users, I have been designing and developing this web application. Its name is Positive Actions, and its goal is to bring awareness to all the environmental events that will take place at a specific location.</p>
                <div className="relative-container">
                    <img src={pa1} alt="macbook set"></img>
                    {/* <img src={pa2} className="small-right" alt="iphone set"></img> */}
                </div>
                <p>The homepage of the website shows the map of the current location of the user. This page also gives details about the local events that will take place in the future. Each event has its own details page. On which are detailed the organisation details, the specific place where the event will happen, and the count of person who said they would come.</p>
                <img src={pa4} alt="login set"></img>
                <p>All users can subscribe to the website and then freely post their own event. There is an authentication and secure user management system supported by AWS. The web app itself is a SPA made with React.js and mobx for state management.</p>
            </div>
        );
    }
}

export default PositiveActions;