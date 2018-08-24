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

function View(props) {
  const { index, number, click } = props;    //eslint-disable-line
  const viewStyle = {
    backgroundImage: `url(${picArray[number].src})`,
    // height: '400px',
    // width: '600px',
    backgroundSize: '100% 100%',
  };
  return (
    <div className="small" style={viewStyle}>
      <button type="button" className="viewButton" onClick={click}>
        {/* <img src="bubble.jpg" class="test" /> */}
      </button>
      <p className="letter">husky</p>
    </div>
  );
}
View.defaultProps = {
  index: 0,
  number: 0,
  click: () => { },
};
View.propTypes = {
  index: PropTypes.number,
  number: PropTypes.number,
  click: PropTypes.func,
};

export default View;
