import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import ProximaNova from '../../../../components/Typograpghy/ProximaNova';

const style = StyleSheet.create({
  wrapper: {
    width: 115,
    borderRadius: 2,
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 6,
  },
  text: {
    fontSize: 12,
    lineHeight: 16,
    color: '#000',
    textAlign: 'center',
    flex: 1,
  },
});
class TrailerButton extends Component {
  _handleClick = () => {
    const { navigation } = this.props;
    navigation.navigate('Bio');
  };

  render() {
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={this._handleClick}>
        <View style={style.wrapper}>
          <Image source={{ uri: 'group_6' }} style={style.icon} />
          <ProximaNova weight="bold" style={style.text}>
            Watch Trailer
          </ProximaNova>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(TrailerButton);
