import React from 'react';
import PropTypes from 'prop-types';

function Buttons(props) {
  const { name, click } = props;
  let str = '';
  if (name === 'LEFT') {
    str = '/image/left.png';
  } else {
    str = '/image/right.png';
  }
  const photoStyle = {
    backgroundImage: `url(${str})`,
    backgroundSize: '100% 100%',
    height: '400px',
    width: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(209, 203, 178)',
    opacity: 0.7,
    background: '-webkit - linear - gradient(rgb(252, 251, 250), rgb(97, 85, 85))',
  };
  return (
    <button type="button" onClick={click} style={photoStyle} className="border" />
  );
}
Buttons.defaultProps = {
  name: '',
  click: () => { },
};
Buttons.propTypes = {
  name: PropTypes.string,
  click: PropTypes.func,
};

export default Buttons;
