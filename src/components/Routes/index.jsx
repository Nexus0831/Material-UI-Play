import React from 'react';

import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import { Route } from 'react-router';

import Material from '../Material';


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          path="/"
          exact
          render={
            props => (
              <Material
                {...props}
              />
            )
          }
          {...this.props}
        />
      </Switch>
    );
  }
}

export default Routes;
