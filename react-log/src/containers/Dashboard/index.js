import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import CustomInput from '../../components/Input';
import CustomButton from '../../components/Button';

export const list = ['Kasia', 'Mateusz'];

class Dashboard extends Component {
  componentDidMount() {
    console.log('Dashboard');
  }

  render() {
    return (
      <div>
        <CustomInput />
        <CustomButton title="Ok" />
      </div>
    );
  }
}

export default withRouter(Dashboard);
