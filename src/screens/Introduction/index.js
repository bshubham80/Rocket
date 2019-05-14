import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, AsyncStorage } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { connect } from 'react-redux';

import { setFirstName, setLastName } from '../../actions/userAction';

import BlockButton from '../../components/Button/BlockButton';
import Terms from '../../components/Terms';
import storageKeys from '../../constants/storageKeys';
import Heading from '../../components/Text/Heading';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    flex: 1,
  },
  formContainer: {
    paddingHorizontal: 24,
    paddingTop: 29,
  },
  termsContainer: {
    marginTop: 47,
    overflow: 'hidden',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
  },
});

class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
    };
  }

  componentDidMount = () => {
    StatusBar.setBackgroundColor('#000000', true);
  };

  _handleClick = () => {
    const {
      navigation: { navigate },
      setFN,
      setLN,
    } = this.props;
    const { firstName, lastName } = this.state;
    console.log(this.state);
    AsyncStorage.multiSet(
      [[storageKeys.key_first_name, firstName], [storageKeys.key_last_name, lastName]],
      () => {
        // set first Name and last name in redux store
        setFN(firstName);
        setLN(lastName);

        navigate('Home');
      }
    );
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.formContainer}>
          <Heading>Hey! What should we call you?</Heading>

          <TextField
            label="First Name"
            value={this.state.firstName}
            labelTextStyle={{ fontFamily: 'ProximaNova-Regular' }}
            onChangeText={text => this.setState({ firstName: text })}
          />

          <TextField
            label="Last Name"
            value={this.state.lastName}
            labelTextStyle={{ fontFamily: 'ProximaNova-Regular' }}
            onChangeText={text => this.setState({ lastName: text })}
          />

          <View style={styles.termsContainer}>
            <Terms />
          </View>
        </View>
        <BlockButton
          label="Continue"
          onPress={this._handleClick}
          containerStyle={styles.buttonContainer}
        />
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
)(Introduction);
