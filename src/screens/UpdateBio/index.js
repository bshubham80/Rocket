import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { TextField } from 'react-native-material-textfield';
import Heading from '../../components/Text/Heading';
import BlockButton from '../../components/Button/BlockButton';
import { setFirstName, setLastName } from '../../actions/userAction';
import storageKeys from '../../constants/storageKeys';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    flex: 1,
  },
  formContainer: {
    paddingHorizontal: 24,
    paddingTop: 29,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
  },
  backContainer: {
    flexDirection: 'row',
  },
  backArrow: {
    width: 14,
    height: 14,
    marginBottom: 29,
  },
});

class UpdateBio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentWillMount = () => {
    const { navigation } = this.props;

    const value = navigation.getParam('value', '');
    this.setState({ value: value || '' });
  };

  _handleClick = () => {
    const { value } = this.state;
    const { navigation, setFN, setLN } = this.props;
    const updateItem = navigation.getParam('updateItem', 0);

    if (updateItem === 1) {
      AsyncStorage.setItem(storageKeys.key_first_name, value, () => {
        setFN(value);
        this._back();
      });
    } else {
      AsyncStorage.setItem(storageKeys.key_last_name, value, () => {
        setLN(value);
        this._back();
      });
    }
  };

  _back = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    const { navigation } = this.props;
    const updateItem = navigation.getParam('updateItem', 0);
    const label = updateItem === 1 ? 'First Name' : 'Last Name';

    return (
      <View style={styles.wrapper}>
        <View style={styles.formContainer}>
          <View stlye={styles.backContainer}>
            <TouchableOpacity activeOpacity={1} onPress={this._back}>
              <Image source={{ uri: 'arrow_back' }} style={styles.backArrow} />
            </TouchableOpacity>
          </View>
          <Heading>Update your Name</Heading>
          <TextField
            label={label}
            value={this.state.value}
            labelTextStyle={{ fontFamily: 'ProximaNova-Regular' }}
            placeholderTextColor="#909090"
            onChangeText={text => this.setState({ value: text })}
          />
        </View>
        <BlockButton
          label="Save"
          showRightIcon={false}
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
)(UpdateBio);
