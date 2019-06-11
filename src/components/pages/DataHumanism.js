import React, { Component } from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {
    BrowserRouter as Router, Link
} from 'react-router-dom';
import dh1 from '../../assets/dh1.jpg';
import dh2 from '../../assets/dh2.jpg';
import dh3 from '../../assets/dh3.jpg';
import dh4 from '../../assets/dh4.jpg';

class DataHumanism extends Component {
    render() {
        return (
            <div className="data-humanism-container">
                <Link className="link" to={process.env.PUBLIC_URL + '/'}>
                    <KeyboardBackspaceIcon className="back-icon"></KeyboardBackspaceIcon>
                </Link>
                <h3>Data Humanism - A case study</h3>
                <a target="_blank" rel="noopener noreferrer" href="https://guillaumemmm.github.io/running/index.html">See here the full result of the data visualization process.</a>

                <img src={dh1} alt="humanism viz"></img>

                <h3>Data humanism</h3>
                <p>The world is made of complicated mechanisms and interactions. Thus, the data capturing the world is also complex. But do we always consider this complexity when working with data ?</p>
                <p>In Big Data projects, a piece of data is just one more line. The more lines there are, the more credible the dataset is. The line itself is no more than a drop in the ocean and does not represent anything anymore. It has no specific form, and gives us very little hook on reality. Data is a magic plasma which we feed to data visualization tools which then recommend us the best way of depicting it.</p>
                <p>As far as data visualization is concerned, especially dashboards in which each widget answers a specific question and gives a limited amount of information, we hope to explain complex phenomena with generic questions and formatted answers.</p>
                <p>Most of the time, data is just what we take from the world to answer our most <strong>valuable</strong> questions. We lose the sense of what data represents. Thus, its complexity in not considered.</p>
                <p>Maybe using our digital tools to find answers to generic pre-existing questions is not the only way of behaving with data.</p>
                <p>Let’s say I have an app which tracks how many kilometers I ran in the last month. I chose a bar chart to show the distance in km for each week of the month. It is a valid design which gives valid information. It answers the question : “How many kilometers did I run each week ?”. However, it’s only valid and nothing more, because it doesn’t try to mean anything else than what it shows. Maybe one bar in the visualization matches with hours of physical effort in various places with various people feeling various emotions.</p>
                <p>Data humanists like <a href="http://giorgialupi.com" target="_blank" rel="noopener noreferrer">Giorgia Lupi</a>, who wrote <a href="https://medium.com/@giorgialupi/data-humanism-the-revolution-will-be-visualized-31486a30dbfb" target="_blank" rel="noopener noreferrer">a manifesto</a>, say the bar chart is not the issue. The fault is ours, willing to show an inherently human piece of information without considering the human.</p>
                <p>To find the human in the dataset, they suggest ways to reincorporate empathy at different levels of the data handling.</p>
                <p>In the next part, I will describe how this can be done, and I will try to use these ideas as guidance for making a more human running app visualization.</p>
                
                <h3>Guidelines</h3>
                <h4>Focus on the context</h4>
                <p>Unlike the traditional approach in which questions are asked and answers are found, data should be contextualized. “Sneak context in. (always)” says Giorgia Lupi. The process of analyzing the data while thinking about its possible visual representations will hopefully reveal the substance of the context.</p>

                <p><strong>"This is why we have to reclaim a personal approach to how data is captured, analyzed and displayed, proving that subjectivity and context play a big role in understanding even big events and social changes — especially when data is about people."</strong></p>

                <h4>Collect your own data</h4>
                <p>Manually collecting the data makes it more human. Generally, normal data engineers would find an available dataset that suits their needs. But by carefully making it on their own, they would not forget what data represents. Moreover, in trying to have a more humanist approach, there is no <strong>need</strong> for any specific set of data. In the case of the running app above, the goal is just to translate the experience of the runner into an abstracted visual form, thus no specific form of data is recommended.</p>
                <p><a href="http://www.stefanieposavec.com" target="_blank" rel="noopener noreferrer">Stefani Posavec</a> suggests in her <a href="https://vimeo.com/287094544" target="_blank" rel="noopener noreferrer">talk at Eyeo 2018</a> that the gathering of data can be a worthwhile activity in itself. And she rehabilitates what she calls anoraks providing very personal examples.</p>

                <h4>Analyse and Design</h4>
                <p>Then, the data analysis process can be partly done by diving into the dataset. Doing data visualization hand sketching at the same time may reveal the set’s underlying structures. With this way of mixed analysis and design, the usual data driven designs paradigm might be dodged.</p>

                <h4>Empower the reader</h4>
                <p>Even after the data visualization design is done, the data analysis process is not over yet. The design’s purpose is to depict complex phenomena, therefore part of the analysis work should be left to the reader of the design. This is what people at <a href="https://www.accurat.it" target="_blank" rel="noopener noreferrer">Accurat</a> call non-linear storytelling. The users are invited to pick their information and to make a story out of it.</p>

                <h3>A more human running app</h3>
                <p>I like running a lot. And when I discover a city, I try to find nice running tracks, both to exercise and to discover the places I visit. I sometimes use a running app that tracks my runs and sums it up into data visualization designs. Of course the running apps are mainly made for athletes who want to have reports about their performances, therefore the designs are non-humanistic. As I am not an athlete, and now that the data humanism rules are a little clearer to me, I have tried to design my own running reports.</p>
                <p><a href="https://guillaumemmm.github.io/running/index.html" target="_blank" rel="noopener noreferrer">The full result is available here.</a> Continue reading if you are interested in my data visualization thought process.</p>

                <h4>What already exists</h4>
                <p>The reports in the original running app gives three types of visualization design. First a bar chart giving the km ran in the last weeks, like mentioned above. Then a map, where the circuit is highlighted, with gradients from green to red depending of the speed. And finally line charts giving many other insights on the last run.</p>

                <img src={dh2} alt="runnastic app screenshots"></img>
                <h4>The design and data choices</h4>
                <p>I am sensitive to colors as general impressions. When I think about the tracks I’m used to running through, I imagine a series of colors. In Paris, I imagine the beige of the buildings with the grey of the Seine and the intense blue sky.</p>
                <p>For the data collection, I decided to go through my usual tracks on google street view, and to choose at each kilometers the color that strikes me the most.</p>
                <img src={dh3} alt="google street view screenshot"></img>
                <p>Now my data is made of a series of circuits, and for each of them a series of colors.</p>
                <p>Just like most people on earth, I rarely run without listening to music. And I also see the albums I listen to as shades. Therefore, for each one of my last 9 runs, I wrote down the music I listened to and gave it colors.</p>
                <p>For each of these runs, I also gave three types of feedback. An environmental feedback, from 1/3 for a poor running environment at that time, to 3/3 for a great experience. A physical fulfillment feedback, 1/3 for physical hard times, and 3/3 for perfect conditions. End eventually a psychological feedback, often linked to the music I listened to.</p>
                <p>I also added to my personal data various indicators like the length of the tracks or its difficulty.</p>
                <p>Then, I had to find interesting ways to squeeze the data and to shape the design so that I could achieve a visualization that translates my running experience. I wanted to give a colorful feel for each of the runs.</p>

                <img src={dh4} alt="humanism viz"></img>

                <h4>Interactive data visualisation</h4>
                <p>The fact that I decided to make a (slightly) interactive website with the library d3.js is not insignificant. One of the themes of data humanism is that technology and data should drive as few decisions as possible. And displaying the unfixed result through a digital interactive medium (with a library meaning literally ‘data driven’) means that technology has given structure to the design.</p>
                <p>However, in that case study, I used the javascript technology to enhance the storytelling by adding interactivity. A click on any color element related to a specific music opens a new tab with a youtube video playing that music.</p>
                <p>A click of the mouse, a tap with the thumb or the mouse going over an element are all dimensions added to the space of the stories that can be told through the design. And as a first attempt to data humanism design I hope that at least some running stories will be read through my experiment.</p>
            </div>
        );
    }
}

export default DataHumanism;