import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

// import circles from '../assets/circles.jpg';
// import andree from '../assets/andree.jpg';
// import github from '../assets/github.jpg';
// import speech from '../assets/speech.jpg';
// import collage from '../assets/collage.jpg';

import sdh from '../assets/sdh.jpg';
import spa from '../assets/spa.jpg';
import sae from '../assets/sae.jpg';
import salp from '../assets/salp.jpg';
import scm from '../assets/scm.jpg';
import ssr from '../assets/ssr.jpg';
import sca from '../assets/smv.jpg';

class Work extends Component {
    render() {
        return (
            <React.Fragment>
                <p className="intro-projects"> Take a look at some of my most recent projects ↓</p>
                <div className="work-container">
                    {/* {this.state.workElements.map((workElm, i) => <WorkElement data={workElm} key={i}></WorkElement>)} */}
                    <Link to="/data-humanism" className="work-element">
                        <img className="work-element-image" src={sdh} alt="circles dataviz"></img>
                        <h3>Data Humanism</h3>
                    </Link>

                    <Link to="/positive-actions" className="work-element">
                        <img className="work-element-image" src={spa} alt="circles dataviz"></img>
                        <h3>Positive Actions</h3>
                    </Link>

                    <Link to="/andree-lawrance-website" className="work-element">
                        <img className="work-element-image" src={sae} alt="circles dataviz"></img>
                        <h3>André·e Lawrance Website</h3>
                    </Link>

                    <Link to="/andree-lawrance" className="work-element">
                        <img className="work-element-image" src={salp} alt="circles dataviz"></img>
                        <h3>André·e Lawrance Project</h3>
                    </Link>

                    {/* <Link to="/contribution-music" className="work-element">
                        <img className="work-element-image" src={scm} alt="circles dataviz"></img>
                        <h3>Github Contributions Music</h3>
                    </Link> */}

                    <Link to="/speech-repartition" className="work-element">
                        <img className="work-element-image" src={ssr} alt="circles dataviz"></img>
                        <h3>Speaking Time Repartition</h3>
                    </Link>

                    <Link to="/collage-website" className="work-element">
                        <img className="work-element-image" src={sca} alt="circles dataviz"></img>
                        <h3>Collage Artist Website</h3>
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}

export default Work;