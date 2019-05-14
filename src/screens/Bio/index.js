import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, StyleSheet, AsyncStorage } from 'react-native';
import ProximaNova from '@components/Typograpghy/ProximaNova';
import DetailBlock from './components/DetailBlock';
import storageKeys from '../../constants/storageKeys';

const style = StyleSheet.create({
  logout: {
    fontSize: 14,
    lineHeight: 20,
    marginTop: 58,
    flex: 1,
    color: '#d8232a',
    textAlign: 'center',
  },
  demoContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
  },
  demoText: {
    fontSize: 12,
    lineHeight: 20,
    color: '#909090',
    textAlign: 'center',
  },
});

class Bio extends Component {
  componentWillMount = async () => {
    const { key_first_name, key_last_name } = storageKeys;
    this.values = await AsyncStorage.multiGet([key_first_name, key_last_name]);
    console.log('Getting values', this.values);
  };

  render() {
    const {
      firstName,
      lastName,
      navigation: { navigate },
    } = this.props;

    const text = `Demo App\nV1.02`;
    return (
      <View style={{ flex: 1 }}>
        {/* <Header /> */}
        <DetailBlock
          label="First Name"
          value={firstName}
          onEdit={() => navigate('UpdateBio', { updateItem: 1, value: firstName })}
        />
        <DetailBlock
          label="Last Name"
          value={lastName}
          onEdit={() => navigate('UpdateBio', { updateItem: 2, value: lastName })}
        />
        <ProximaNova style={style.logout}>Logout</ProximaNova>
        <View style={style.demoContainer}>
          <ProximaNova numberOfLines={2} style={style.demoText}>
            {text}
          </ProximaNova>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {
    user: { firstName, lastName },
  } = state;
  return {
    firstName,
    lastName,
  };
};

export default connect(
  mapStateToProps,
  null
)(Bio);
