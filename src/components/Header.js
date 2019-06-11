import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <h1><a href="/">Guillaume Meigniez</a></h1>
                <div className="header-bottom">
                    <p className="bio">Hi <span role="img" aria-label="waving boy">🙋🏻‍♂️</span>, I'm Guillaume Meigniez, a French creative engineer. I do <strong>front-end development</strong> and  <strong>data visualization</strong> for a living. I'm currently doing freelance from Taipei <span role="img" aria-label="taiwanese flag">🇹🇼</span>.</p>
                    <ul className="links">
                        <li className="link"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/guillaume-meigniez/">linkedin</a></li>
                        <li className="link"><a target="_blank" rel="noopener noreferrer" href="https://github.com/GuillaumeMMM">github</a></li>
                        <li className="link"><a target="_blank" rel="noopener noreferrer" href="mailto:guillaume.meigniez@gmail.com">mail</a></li>
                        <li className="link"><a target="_blank" rel="noopener noreferrer" href="https://medium.com/@guillaume.meigniez">medium</a></li>
                        <li className="link"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/subtropicalboi111/">instagram</a></li>
                        <li className="link"><a target="_blank" rel="noopener noreferrer" href="http://guillaumemeigniez.me/Resume_MEIGNIEZ.pdf">resume</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;