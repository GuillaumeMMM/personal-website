import React, { Component } from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {
    BrowserRouter as Router, Link
} from 'react-router-dom';
import cw1 from '../../assets/cw1.jpg';

class CollageWebsite extends Component {
    render() {
        return (
            <div className="collage-website-container">
                <Link className="link" to={process.env.PUBLIC_URL + '/'}>
                    <KeyboardBackspaceIcon className="back-icon"></KeyboardBackspaceIcon>
                </Link>
                <h3>Collage Website</h3>
                <p>The French Collage Artist Michelle Versillé contacted me to make a simple website that would give a first impression about her work.</p>
                <img src={cw1} alt="Michelle Versillé's collage"></img>
                <p>The website is available <a target="_blank" rel="noopener noreferrer" href="https://www.michelleversille.fr">here</a>.</p>
            </div>
        );
    }
}

export default CollageWebsite;