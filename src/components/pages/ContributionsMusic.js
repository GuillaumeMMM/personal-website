import React, { Component } from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {
    BrowserRouter as Router, Link
} from 'react-router-dom';
import cm1 from '../../assets/cm.jpg';

class ContributionsMusic extends Component {
    render() {
        return (
            <div className="contribution-music-container">
                <Link className="link" to={process.env.PUBLIC_URL + '/'}>
                    <KeyboardBackspaceIcon className="back-icon"></KeyboardBackspaceIcon>
                </Link>
                <h3>Contribution Music</h3>
                <p>Why were the github contributions designed as a coloured grid if not to make music out of it ?</p>
                <img src={cm1} alt="github contribution grid"></img>
                <p>It is now possible <a target="_blank" rel="noopener noreferrer" href="https://guillaumemmm.github.io/contributionsmusic/">here</a>.</p>
            </div>
        );
    }
}

export default ContributionsMusic;