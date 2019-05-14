import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import ProximaNova from '../../../../components/Typograpghy/ProximaNova';

const style = StyleSheet.create({
  mainWraper: {
    marginTop: 28,
  },
  teaserNumber: {
    fontSize: 11,
    color: '#ffffff',
    marginTop: 6,
    marginBottom: 12,
    marginLeft: 16,
    opacity: 0.5,
  },
  detailsContainer: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  teaserBanner: {
    width: '100%',
    height: 120,
  },
  teaserName: {
    fontSize: 14,
    color: '#000000',
    marginTop: 6,
  },
  teaserDetails: {
    fontSize: 12,
    color: '#000000',
    marginTop: 1,
  },
  playIcon: {
    marginVertical: 10,
    marginRight: 4,
    width: 24,
    height: 24,
  },
});

class Teaser extends Component {
  render() {
    const {
      item: { number, banner, desc, title },
    } = this.props;
    return (
      <View style={style.mainWraper}>
        <ProximaNova style={style.teaserNumber}>{number}</ProximaNova>
        <Image source={{ uri: banner }} style={style.teaserBanner} />
        <View style={style.detailsContainer}>
          <View style={{ flex: 1 }}>
            <ProximaNova weight="bold" style={style.teaserName}>
              {title}
            </ProximaNova>
            <ProximaNova style={style.teaserDetails}>{desc}</ProximaNova>
          </View>
          <Image source={{ uri: 'group_6' }} style={style.playIcon} />
        </View>
      </View>
    );
  }
}

export default Teaser;
