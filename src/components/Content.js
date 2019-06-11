import React, { Component } from 'react';
// import Navbar from './Navbar';
import Work from './Work';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import DataHumanism from './pages/DataHumanism';
import CollageWebsite from './pages/CollageWebsite';
import SpeechRepartition from './pages/SpeechRepartition';
import ContributionsMusic from './pages/ContributionsMusic';
import AndreeLawrance from './pages/AndreeLawrance';
import PositiveActions from './pages/PositiveActions';
import AndreeLawranceWebsite from './pages/AndreeLawranceWebsite';

class Content extends Component {

    render() {
        return (
            <div className="content-container">
                <Router>
                    <Route path="/" exact component={Work} />
                    <Route path="/data-humanism" exact component={DataHumanism} />
                    <Route path="/collage-website" exact component={CollageWebsite} />
                    <Route path="/speech-repartition" exact component={SpeechRepartition} />
                    <Route path="/contribution-music" exact component={ContributionsMusic} />
                    <Route path="/andree-lawrance" exact component={AndreeLawrance} />
                    <Route path="/andree-lawrance-website" exact component={AndreeLawranceWebsite} />
                    <Route path="/positive-actions" exact component={PositiveActions} />
                </Router>
            </div>
        );
    }
}

export default Content;