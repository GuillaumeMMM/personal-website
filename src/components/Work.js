import React, { Component } from 'react';
import WorkElement from './WorkElement';

class Work extends Component {

    state ={
        workElements: [
            {
                title: 'Data Humanism case study',
                description: "This interactive data visualization. It shows in a data humanist way the reports for a running app. This case study of a new way for designing data visualization was inspired by Giorgia Lupi's work.",
                link: 'https://guillaumemmm.github.io/running/index.html'
            },
            {
                title: 'Speech repartition in French media',
                description: "This interactive data visualization shows the speech repartition of genders in the main French media. The data was obtained thanks to data.gouv.fr and the work of David Doukhan and Jean Carrive.",
                link: 'https://guillaumemmm.github.io/tempsdeparole/'
            },
            {
                title: 'Michelle Versillé Art website',
                description: 'For the French collage artist Michelel Versillé, I designed and coded this simple website that shows part of her works.',
                link: 'https://guillaumemmm.github.io/michelleversille/'
            },
            {
                title: 'Musicalization of github contributions',
                description: "This data visualization shows any github user's contributions. After chosing the username, the 'Music' button plays a song with different sound samples for each contribution.",
                link: 'https://guillaumemmm.github.io/contributionsmusic/'
            },
            {
                title: 'André.e Lawrance Brand',
                description: 'André.e Lawrance is a fashion brand that I launched in 2018. I tried to give it a global graphical cohesion with the pattern design, the sewing, the photography, the webdesign, the storytelling, the communication and the website.',
                link: 'http://www.andreelawrance.fr'
            },
            {
                title: 'Threejs 3D experiment',
                description: 'To have a first experience with the 3D library three.js, I made this simple 3D game. The goal is to go through all the mazes without touching the cubes. Difficulty increases until the game is over.',
                link: 'https://guillaumemmm.github.io/3Dgame/'
            },
        ]
    } 
    render() {
        return (
            <div className="work-container">
                {this.state.workElements.map((workElm, i) => <WorkElement data={workElm} key={i}></WorkElement>)}
            </div>
        );
    }
}

export default Work;