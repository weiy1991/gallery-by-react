require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/2.jpg');

//var imgDatas = require('../data/imgData.json');

//get the json file
const jsonImg = require('json-loader!../data/imgData.json');
//get the single imgURL
function genImgURL(imgDataArr){
  for (var i=0,j=imgDataArr.length;i<j;i++){
    var singleImgData = imgDataArr[i];
    singleImgData.imgURL = require('../images/'+imgDataArr[i].fileName);
    imgDataArr[i] = singleImgData;
  }
  return imgDataArr;
}
var imgDatas = genImgURL(jsonImg);

class ImgFigure extends React.Component {
  render() {
    return(
      <figure className="img-figure">
        <img src={this.props.data.imgURL}
            alt={this.props.data.title}
        />
        <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>
        </figcaption>
      </figure>
    );
  }
}

class AppComponent extends React.Component {
  render() {
    var controllerUnits = [],
        imgFigures = [];

    imgDatas.forEach(function(value){
      imgFigures.push(<ImgFigure data={value}/>);
    });


    return (
      <section className="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
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
