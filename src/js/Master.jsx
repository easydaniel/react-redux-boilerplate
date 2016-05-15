/**
 * Master Component
 * the root component
 */
import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as BaseActions from './actions/BaseAction';

import styles from '../index.styl';

class Master extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
        <div>
          { this.props.children }
        </div>
    );
  }
}


function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(BaseActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Master);
