import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <a href="#">
            <img src="#" alt="picture" />
          </a>
          <div>
            <ul>
              <li>Link #1</li>
              <li>Link #2</li>
              <li>Link #3</li>
            </ul>
          </div>
          <div>
            <button>Button #1</button>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
