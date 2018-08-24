const picArray = [
  { src: '/image/husky.jpg', description: 'This is a dog.', tital: 'Husky' },
  { src: '/image/cat.jpg', description: 'These are two cat pics.', tital: 'Funny cats' },
  { src: '/image/trevor.jpg', description: 'This is a charactor form Grand Theft Auto.', tital: 'Trevor Philip' },
  { src: '/image/view.jpg', description: 'I do not know this place.', tital: 'Landscape' },
  { src: '/image/ronaldo.jpg', description: 'This is Cristiano Ronaldo in Juventus.', tital: 'World\'s best football player' },
  { src: '/image/keyboard.jpg', description: 'This is a nice keyboard.', tital: 'Leopard' },
  { src: '/image/kimi.jpg', description: 'This is a Kimi Raikkonen from Ferrari.', tital: 'Kimi Raikkonen' },
];
const defaultStatus = {
  index: 0,
  src: picArray[0].src,
};
const mainReducer = (state = defaultStatus, action) => {        //eslint-disable-line
  console.log(state);
  let picNum = state.index;
  switch (action.type) {
    case 'RIGHT':
      picNum += 1;
      return Object.assign({}, state, { index: Math.abs(picNum % 7) });
    case 'LEFT':
      picNum -= 1;
      if (picNum - 1 < 0) {
        picNum += 7;
      }
      return Object.assign({}, state, { index: Math.abs(picNum % 7) });
    case 'SELECT':
      picNum = action.index;
      return Object.assign({}, state, { index: picNum });
    default:
      return state;
  }
};

export default mainReducer;
