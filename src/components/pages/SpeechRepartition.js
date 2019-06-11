import React, { Component } from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {
    BrowserRouter as Router, Link
} from 'react-router-dom';

class SpeechRepartition extends Component {
    render() {
        return (
            <div className="speech-repartition-container">
                <Link className="link" to={process.env.PUBLIC_URL + '/'}>
                    <KeyboardBackspaceIcon className="back-icon"></KeyboardBackspaceIcon>
                </Link>
                <h3>Speaking Time Repartition</h3>
                <p>In 2019, a study claimed that on the radio and on tv, women were given half as much speaking time as men. Thanks <a target="_blank" rel="noopener noreferrer" href="https://www.isca-speech.org/archive/JEP_2018/pdfs/192838.pdf">to the work of David Doukhan and Jean Carrive</a> and thanks to the French open data platform I could analyze the data related to that study. I made an interactive data visualization to highlight the speaking time differences.</p>
                <p>On some media the gaps are indeed alarming. The results are available <a target="_blank" rel="noopener noreferrer" href="https://guillaumemmm.github.io/tempsdeparole/">here</a>.</p>
            </div>
        );
    }
}

export default SpeechRepartition;