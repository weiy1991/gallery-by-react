require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/2.jpg');

//var imgDatas = require('../data/imgData.json');

//get the json file
const jsonImg = require('json-loader!../data/imgData.json');

//print(imgDatas);

//var testImage = require('../images/'+json[6].fileName);

//alert(imgDatas);

//let x= json[0].fileName;

function genImgURL(imgDataArr){
  for (var i=0,j=imgDataArr.length;i<j;i++){
    var singleImgData = imgDataArr[i];
    singleImgData.imgURL = require('../images/'+imgDataArr[i].fileName);
    imgDataArr[i] = singleImgData;
  }
  return imgDataArr;
}

var imgDatas = genImgURL(jsonImg);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
      // <div className="index">
      //   <img src={imgDatas[0].imgURL} alt="Yeoman Generator" />
      //   <span>x</span>
      //   <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      // </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
