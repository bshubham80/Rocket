import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, AsyncStorage, StyleSheet } from 'react-native';
import storageKeys from '../../constants/storageKeys';
import { setFirstName, setLastName } from '../../actions/userAction';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 102,
    height: 102,
  },
});

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount = async () => {
    const { key_first_launch, key_first_name, key_last_name } = storageKeys;
    this.values = await AsyncStorage.multiGet([key_first_launch, key_first_name, key_last_name]);
  };

  componentDidMount = () => {
    setTimeout(() => {
      const [[, firstLaunch], [, firstName], [, lastName]] = this.values;
      const {
        navigation: { navigate },
        setFN,
        setLN,
      } = this.props;

      // Mark first launch flag as true for next time user
      // will redirect to home screen
      if (!firstLaunch) {
        AsyncStorage.setItem(storageKeys.key_first_launch, 'true');
      }

      // set first Name and last name in redux store if have
      setFN(firstName);
      setLN(lastName);

      navigate(!firstLaunch ? 'Introduction' : 'App');
    }, 3000);
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <Image source={{ uri: 'logo' }} style={styles.logo} />
      </View>
    );
  }
}

const mapDispatchToProps = {
  setFN: name => setFirstName(name),
  setLN: name => setLastName(name),
};

export default connect(
  null,
  mapDispatchToProps
)(Splash);
