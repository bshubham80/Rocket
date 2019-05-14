import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import ProximaNova from '../Typograpghy/ProximaNova';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  textStyle: {
    flex: 1,
    fontSize: 12,
    lineHeight: 16,
    color: '#909090',
    marginLeft: 12,
  },
  checkedBox: {
    width: 20,
    height: 20,
  },
});
export default class Terms extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={style.container}>
        <Image source={{ uri: 'checked_box' }} style={style.checkedBox} />
        <ProximaNova numberOfLines={2} style={style.textStyle}>
          By proceeding I agree with Terms & Conditions, Terms of use and Privacy Policy.
        </ProximaNova>
      </View>
    );
  }
}
