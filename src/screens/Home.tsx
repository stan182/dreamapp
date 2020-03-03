import React, { FunctionComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface IHomeProps { };

const Home: FunctionComponent<IHomeProps> = ({ }) => {
  return <View style={styles.container}>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default Home;