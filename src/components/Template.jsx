import React, { Component } from 'react';

class Template extends Component {
  render() {
    return(
      <div>
        <header>
          <h1>Discover Snarky</h1>
        </header>
        <body>
          {this.props.children}
        </body>
      </div>
    )
  }
};

export default Template;