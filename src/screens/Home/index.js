import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import * as data from './data.json';
import Showcase from './components/Showcase';
import Teaser from './components/Teaser';

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const teasers = data.teasers.map((item, index) => <Teaser key={index} item={item} />);
    return (
      <ScrollView>
        <View style={style.wrapper}>
          <Showcase data={data.promo} />
          {teasers}
        </View>
      </ScrollView>
    );
  }
}
export default Home;
