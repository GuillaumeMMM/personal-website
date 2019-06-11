import React, { Component } from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {
    BrowserRouter as Router, Link } from 'react-router-dom';
import al3 from '../../assets/al3.jpg';
import al2 from '../../assets/al2.jpg';
import al1 from '../../assets/al1.jpg';

class AndreeLawrance extends Component {
    render() {
        return (
            <div className="andree-lawrance-container">
                 <Link className="link" to={process.env.PUBLIC_URL + '/'}>
                        <KeyboardBackspaceIcon className="back-icon"></KeyboardBackspaceIcon>
                </Link>
                <h3>André·e Lawrance Project</h3>
                <p>Andre·e Lawrance is a fashion brand experiment. See the <a target="_blank" rel="noopener noreferrer" href="http://www.andreelawrance.fr">website</a> and <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/andre.elawrance/">instagram</a> page.</p>
                <p>A few years ago, I bought an ridiculously expensive embroidery machine. I was finishing my master’s degree at Télécom SudParis, and I was looking for new creative activities. Eventually the machine was too hard to use, and it ended up gatering dust under a table.</p>

                <p>A year later, motivated by some friends and bored at work, I decided to learn how to sew. I build a table, gathered some approximative sewing tools and cheap fabric, and downloaded patterns from the internet. I sew clothes for myself at first, and soon I wanted to show what I was creating.</p>
                <img src={al3} alt="andree lawrance shooting"></img>
                <p>I made the brand André·e Lawrance. André·e is a fictional character who’s gender is undefined. And the clothes are unisex. André·e has a story which is told through the clothes. The colours, the fabrics, the forms are all symbols of what Andre.e lives.</p>
                <img src={al2} alt="andree lawrance shooting"></img>
                <p>This experience of creating a fictional character brought me to draw the patterns for shorts, pants and bags, to take the pictures, to organize shootings, to design a coherent universe for the first chapter of André·e Lawrance’s story, to build websites, and to write the stories.</p>
                <img src={al1} alt="andree lawrance shooting"></img>
                <p>Now the first chapter is over and I am working on the next one.</p>
            </div>
        );
    }
}

export default AndreeLawrance;