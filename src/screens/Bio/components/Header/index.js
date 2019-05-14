import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ProximaNova from '@components/Typograpghy/ProximaNova';

const style = StyleSheet.create({
  wrapper: {
    elevation: 2,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  backArrow: {
    width: 14,
    height: 12,
    marginVertical: 4,
  },
  title: {
    fontSize: 16,
    flex: 1,
    color: '#606060',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={style.wrapper}>
        <TouchableOpacity
          onPress={() => {
            console.log(navigation);
            navigation.dismiss();
          }}
        >
          <Image source={{ uri: 'arrow_back' }} style={style.backArrow} />
        </TouchableOpacity>
        <ProximaNova weight="bold" style={style.title}>
          Edit Personal Details
        </ProximaNova>
      </View>
    );
  }
}

export default Header;
