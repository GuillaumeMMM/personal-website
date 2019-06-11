import React, { Component } from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {
    BrowserRouter as Router, Link } from 'react-router-dom';
import alw1 from '../../assets/alw1.jpg';


class AndreeLawranceWebsite extends Component {
    render() {
        return (
            <div className="andree-lawrance-container">
                 <Link className="link" to={process.env.PUBLIC_URL + '/'}>
                        <KeyboardBackspaceIcon className="back-icon"></KeyboardBackspaceIcon>
                </Link>
                <h3>André·e Lawrance Website</h3>
                <p>As part of the André·e Lawrance brand project, I designed and develop an experimental website to show some parts of the collection. The idea was to give a feel about the mood of the brand. The designs, the forms and colours have been chosen as part of a global brand aesthetic. See the <a target="_blank" rel="noopener noreferrer" href="http://www.andreelawrance.fr">website</a> and <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/andre.elawrance/">instagram</a> page.</p>
                <img src={alw1} alt="andree lawrance shooting"></img>
                <p>The website itself is a React.js web app. The wave effect is done with svg manipulation.</p>
            </div>
        );
    }
}

export default AndreeLawranceWebsite;