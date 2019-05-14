import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ProximaNova from '@components/Typograpghy/ProximaNova';

const style = StyleSheet.create({
  wrapper: {
    padding: 16,
    marginTop: 8,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
  },
  labelStyle: {
    fontSize: 12,
    color: '#909090',
  },
  valueStyle: {
    fontSize: 18,
    color: '#303030',
  },
  editContainer: {
    justifyContent: 'flex-end',
    marginBottom: 2,
  },
  editTextStyle: {
    fontSize: 12,
    color: '#909090',
  },
});
class DetailBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { label, value, onEdit } = this.props;
    return (
      <View style={style.wrapper}>
        <View style={style.container}>
          <ProximaNova style={style.labelStyle}>{label}</ProximaNova>
          <ProximaNova weight="bold" style={style.valueStyle}>
            {value}
          </ProximaNova>
        </View>

        <TouchableOpacity activeOpacity={1} onPress={onEdit} style={style.editContainer}>
          <View>
            <ProximaNova weight="bold" style={style.editTextStyle}>
              Edit
            </ProximaNova>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DetailBlock;
