import React from 'react';
import { Button, View, SafeAreaView, Animated, StyleSheet, Easing, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const Home = ({ navigation }) => (
  <SafeAreaView>
    <Text>Home screen</Text>
    <Button
      title="Go to details"
      onPress={() => navigation.navigate('Details')}
    />
  </SafeAreaView>
);

const Details = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#7FB7BE' }}>
    <Text>Details screen</Text>
    <Button
      title="Go back"
      onPress={() => navigation.goBack()}
    />
  </SafeAreaView>
);

const MainAppStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      title: 'Details',
    },
  },
}, {
  transitionConfig: () => {
    return {
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
    };
  },
});

export default MainAppStack;
