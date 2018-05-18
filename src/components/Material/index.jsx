/* eslint-disable no-class-assign */
// node_modules
import React from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { withRouter } from 'react-router';

import {
  reduxForm,
  Field,
  getFormValues,
  isValid,
  initialize
} from 'redux-form';

import AppBar from 'material-ui/AppBar';

import * as actions from './../../actions/material';

class Material extends React.Component {
  render() {
    return (
      <AppBar title="My AppBar" />
    );
  }
}

Material = connect(state => ({
  formValues: getFormValues('material')(state),
  valid: isValid('material')(state)
}))(Material);

const mapStateToProps = (state) => {
  return {
    app: state.app
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    Object.assign(
      {},
      actions
    ),
    dispatch
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'material',
})(Material)));
