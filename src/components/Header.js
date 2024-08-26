import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#members">Members</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#publications">Publications</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
