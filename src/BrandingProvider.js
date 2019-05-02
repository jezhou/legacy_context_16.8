import React from 'react';
import PropTypes from 'prop-types';

export default class BrandingProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static childContextTypes = {
    newBranding: PropTypes.bool,
  };

  getChildContext() {
    // toggle to see effects
    return { newBranding: true };
  }

  render() {
    return this.props.children;
  }
}
