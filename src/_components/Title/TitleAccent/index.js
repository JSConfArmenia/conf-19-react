import React from 'react';
import PropTypes from 'prop-types';
import colors from '_constants/colors';

const TitleAccent = ({ color, style, ...props }) => (
  <span style={{ ...style, color: colors[color] || colors.textMain }} {...props} />
);

TitleAccent.propTypes = {
  color: PropTypes.string,
};

TitleAccent.defaultProps = {
  color: 'textMain',
};

export default TitleAccent;
