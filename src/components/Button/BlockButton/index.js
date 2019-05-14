import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import theme from '@config/theme';
import globalStyle from '@config/globalStyle';
import ProximaNova from '@components/Typograpghy/ProximaNova';

const style = StyleSheet.create({
  container: {
    width: '100%',
  },
  wrapper: {
    height: 48,
    flexDirection: 'row',
    ...globalStyle.center,
    backgroundColor: theme.color.primaryButton,
  },
  label: {
    fontSize: 14,
    color: '#fff',
  },
  rightArrow: {
    width: 14,
    height: 12,
    marginLeft: 8,
  },
});

class BlockButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { label, containerStyle, onPress, showRightIcon = true } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.56}
        style={[style.container, containerStyle]}
      >
        <View style={style.wrapper}>
          <ProximaNova weight="bold" style={style.label}>
            {label}
          </ProximaNova>
          {showRightIcon && <Image source={{ uri: 'combined_shape' }} style={style.rightArrow} />}
        </View>
      </TouchableOpacity>
    );
  }
}

export default BlockButton;
