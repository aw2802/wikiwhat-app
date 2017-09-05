import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import App from './App';
import LoginWithApollo from './Login';

import { getLocalStorageItem } from '../utils/helper-functions';

class Main extends React.Component {
  constructor() {
    super();
    this.renderMe = this.renderMe.bind(this);
  }

  renderMe() {
    const user = getLocalStorageItem('user');
    const route = `user/${user.id}`;
    return (user === undefined) ?
      <LoginWithApollo /> : this.props.history.push(route);
  }

  render(){
		return (
			<div>
				{ this.renderMe }
			</div>
		);
	}
}

Main.PropTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired })
};


export default withRouter(Main);
