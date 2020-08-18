/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({
  children, inverted, isGoogleSign, ...otherProps
}) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${isGoogleSign ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
