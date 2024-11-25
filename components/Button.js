import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ children, onPress, mode = 'text', style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        mode === 'contained' && styles.contained,
        style,
      ]}
    >
      <Text style={[styles.text, mode === 'contained' && styles.textContained]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  contained: {
    backgroundColor: '#4A90E2',
  },
  text: {
    fontSize: 16,
    color: '#4A90E2',
  },
  textContained: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Button;