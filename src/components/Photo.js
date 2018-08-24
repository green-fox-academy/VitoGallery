import React from 'react';
import PropTypes from 'prop-types';

const picArray = [
  { src: '/image/husky.jpg', description: 'This is a dog.', tital: 'Husky' },
  { src: '/image/cat.jpg', description: 'These are two cat pics.', tital: 'Funny cats' },
  { src: '/image/trevor.jpg', description: 'This is a charactor form Grand Theft Auto.', tital: 'Trevor Philip' },
  { src: '/image/view.jpg', description: 'I do not know this place.', tital: 'Landscape' },
  { src: '/image/ronaldo.jpg', description: 'This is Cristiano Ronaldo in Juventus.', tital: 'World\'s best football player' },
  { src: '/image/keyboard.jpg', description: 'This is a nice keyboard.', tital: 'Leopard' },
  { src: '/image/kimi.jpg', description: 'This is a Kimi Raikkonen from Ferrari.', tital: 'Kimi Raikkonen' },
];

function Display(props) {
  const { index } = props;
  const photoStyle = {
    backgroundImage: `url(${picArray[index].src})`,
    backgroundSize: '100% 100%',
  };
  return (
    <div className="m2" style={photoStyle}>
      <div className="dissUp" />
      <div className="dissDown">
        <p className="upText">{picArray[index].tital}</p>
        <p className="downText">{picArray[index].description}</p>
      </div>
    </div>
  );
}
Display.defaultProps = {
  index: 0,
};
Display.propTypes = {
  index: PropTypes.number,
};

export default Display;
