import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <h1>Guillaume Meigniez</h1>
                <div className="header-bottom">
                    <p className="bio">Hi <span role="img" aria-label="waving boy">🙋🏻‍♂️</span>, I'm Guillaume Meigniez. I do <strong>front-end development</strong> and  <strong>data visualization</strong> for a living. I'm currently doing freelance from Taipei <span role="img" aria-label="taiwanese flag">🇹🇼</span>.</p>
                    <ul className="links">
                        <li className="link"><a href="https://www.linkedin.com/in/guillaume-meigniez/">linkedin</a></li>
                        <li className="link"><a href="https://github.com/GuillaumeMMM">github</a></li>
                        <li className="link"><a href="mailto:guillaume.meigniez@gmail.com">mail</a></li>
                        <li className="link"><a href="https://medium.com/@guillaume.meigniez">medium</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;