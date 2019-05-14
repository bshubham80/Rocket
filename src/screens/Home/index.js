import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>Home textInComponent </Text>
        <Button
          title="Watch Trailer"
          onPress={() => {
            const { navigation } = this.props;
            navigation.navigate('Bio');
          }}
        />
      </View>
    );
  }
}
export default Home;
