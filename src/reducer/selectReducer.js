const selectReducer = (defaultStatus = { count: 0 }, action) => {        //eslint-disable-line
//   console.log(defaultStatus, action);
//   switch (action.type) {
//     case 'buy':
//       return Object.assign({}, defaultStatus, { count: defaultStatus.count + 1 });
//     case 'eat':
//       if (defaultStatus.count <= 0) {
//         alert('eat shit')
//         return defaultStatus;
//       }
//       return Object.assign({}, defaultStatus, { count: defaultStatus.count - 1 });
//     default:
//       return defaultStatus;
//   }
};

export default selectReducer;
