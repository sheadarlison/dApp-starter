import React, { Component } from 'react';
import Debugger from './Debugger';

import './Nav.css';

class Nav extends Component {
  state = {
    showDebugger: false
  }

  render() {
    const { context } = this.props;

    const Menu = (
      <div className="Navbar__menu">>
        <a href="#" onClick={() => window.location.href  = '/'}>dApp</a>
      </div>
    );

    return (
      <nav className="Navbar">
        <Debugger show={this.state.showDebugger} context={context} />
        <div className="Navbar__logo" onClick={() => this.setState({ showDebugger: !this.state.showDebugger })}>
          <svg viewBox="0 0 256 417">
            <g>
              <polygon fill="#343434" points="127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32" />
              <polygon fill="#8C8C8C" points="127.962 0 0 212.32 127.962 287.959 127.962 154.158" />
              <polygon fill="#3C3C3B" points="127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866" />
              <polygon fill="#8C8C8C" points="127.962 416.9052 127.962 312.1852 0 236.5852" />
              <polygon fill="#141414" points="127.9611 287.9577 255.9211 212.3207 127.9611 154.1587" />
              <polygon fill="#393939" points="0.0009 212.3208 127.9609 287.9578 127.9609 154.1588" />
            </g>
          </svg>
        </div>

        { Menu }
      </nav>
    );
  }
}

export default Nav;
