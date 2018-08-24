import React from 'react';
import LeftClick from './leftClick';
import DisplayPhoto from './displayPhoto';
import RightClick from './rightClick';
import Preview from './Preview';


const Main = function () {   //eslint-disable-line
  return (
    <div className="big">
      <div className="up">
        <h1>Gallery with Redux</h1>
      </div>
      <div className="middle">
        <div className="m0" />
        <LeftClick />
        <DisplayPhoto />
        <RightClick />
        <div className="m0" />
      </div>
      <div className="down">
        <Preview />
      </div>
    </div>
  );
};

export default Main;
