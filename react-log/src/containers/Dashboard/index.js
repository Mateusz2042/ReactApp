import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Dashboard extends Component {
  componentDidMount() {
    console.log('Dashboard');
  }

  render() {
    return (
      <div>
        <text>xxx</text>
      </div>
    );
  }
}

export default withRouter(Dashboard);
