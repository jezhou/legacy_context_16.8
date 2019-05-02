import React from 'react';
import PropTypes from 'prop-types';


const NestedFunctional = (_, context) => context.newBranding ? <div>"Functional: New Brand"</div> : <div>"Functional: Old Brand"</div>;

NestedFunctional.contextTypes = {
  newBranding: PropTypes.bool
};

export default NestedFunctional;

