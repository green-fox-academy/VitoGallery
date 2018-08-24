import React from 'react';
import PicAll from './pictures/picAll';


const Preview = function () {   //eslint-disable-line
  const Picc0 = PicAll[0];
  const Picc1 = PicAll[1];
  const Picc2 = PicAll[2];
  const Picc3 = PicAll[3];
  const Picc4 = PicAll[4];
  const Picc5 = PicAll[5];
  const Picc6 = PicAll[6];
  return (
    <div className="down">
      {/* <Pic0 />
      <Pic1 />
      <Pic2 />
      <Pic3 />
      <Pic4 />
      <Pic5 />
      <Pic6 /> */}
      <Picc0 />
      <Picc1 />
      <Picc2 />
      <Picc3 />
      <Picc4 />
      <Picc5 />
      <Picc6 />

      {/* <PicAll /> */}
    </div>
  );
};

export default Preview;
