import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import TrailerButton from '../TrailerButton';
import ProximaNova from '../../../../components/Typograpghy/ProximaNova';

const style = StyleSheet.create({
  poster: {
    width: '100%',
    height: 320,
    justifyContent: 'flex-end',
  },
  detailContainer: {
    paddingTop: 32,
    paddingBottom: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieName: {
    fontSize: 24,
    textAlign: 'center',
    color: '#ffffff',
  },
  movieDetails: {
    fontSize: 12,
    textAlign: 'center',
    color: '#ffffff',
    marginTop: 6,
    opacity: 0.5,
  },
  buttonContaier: {
    flexDirection: 'row',
    marginTop: 12,
  },
});
export default class Showcase extends Component {
  render() {
    const buttonContainerColors = ['#00000000', '#000000'];
    const {
      data: { name, desc, banner },
    } = this.props;
    return (
      <View>
        <ImageBackground source={{ uri: banner }} style={style.poster}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={buttonContainerColors}
          >
            <View style={style.detailContainer}>
              <ProximaNova weight="bold" style={style.movieName}>
                {name}
              </ProximaNova>
              <ProximaNova style={style.movieDetails}>{desc}</ProximaNova>
              <View style={style.buttonContaier}>
                <TrailerButton />
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }
}
