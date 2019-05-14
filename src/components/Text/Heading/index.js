import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import ProximaNova from '../../Typograpghy/ProximaNova';

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 18,
    color: '#303030',
  },
});
class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <ProximaNova weight="bold" style={styles.headingStyle}>
        {children}
      </ProximaNova>
    );
  }
}

export default Heading;
