import React from 'react';
import PropTypes from 'prop-types';

export default class Nested extends React.Component {
  static contextTypes = {
    newBranding: PropTypes.bool,
  }

  render() {
    return this.context.newBranding ? <div>"Class: New Brand"</div> : <div>"Class: Old Brand"</div>;
  }
}
