import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Main from './container/Main';
// import Preview from './container/Preview';


const App = function () {   //eslint-disable-line
  return (
    <Provider store={store}>
      {/* <div className="big">
        <div className="up">
          <h1>My Gallery</h1>
        </div>
        <div className="middle">
          <Main />
        </div>
        <div className="down">
          <Preview />
        </div>
      </div> */}
      <div>
        <Main />
        {/* <Preview /> */}
      </div>
    </Provider>
  );
};

export default App;
