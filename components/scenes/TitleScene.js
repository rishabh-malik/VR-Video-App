import React from 'react';
import {
  Text,
  View,
  VrButton
} from 'react-vr';
//Scene
class TitleScene extends React.Component {
  render() {
    return (
        <Pano source={asset('title-background.jpg')}/>
    )
  }
}
module.exports = TitleScene;