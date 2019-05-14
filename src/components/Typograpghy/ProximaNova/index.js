import React from 'react';
import { Text } from 'react-native';

const getFont = weight => {
  if (weight === 'bold') {
    return 'ProximaNova-Bold';
  }
  if (weight === 'medium') {
    return 'ProximaNova-Black';
  }
  if (weight === 'thin') {
    return 'ProximaNova-Thin';
  }
  if (weight === 'semiBold') {
    return 'ProximaNova-SemiBold';
  }

  return 'ProximaNova-Regular';
};

const ProximaNova = props => {
  const { style, weight, children, uppercase, numberOfLines } = props;

  const overideStyle = {
    fontFamily: getFont(weight),
  };

  const lines = numberOfLines > 1 ? numberOfLines : 1;
  const content = typeof children === 'string' && uppercase ? children.toUpperCase() : children;

  return (
    <Text numberOfLines={lines} style={[overideStyle, style]}>
      {content}
    </Text>
  );
};

export default ProximaNova;
