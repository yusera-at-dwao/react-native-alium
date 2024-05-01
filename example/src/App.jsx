import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { configure, loadAliumSurvey } from 'react-native-alium';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Home = ({ navigation }) => {
  React.useEffect(() => {
    loadAliumSurvey('firstscreen');
  }, []);
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 22,
        }}
        onPress={() => navigation.navigate('Dashboard')}
      >
        Go to dashboard
      </Text>
    </View>
  );
};
const Dashboard = ({ navigation }) => {
  React.useEffect(() => {
    loadAliumSurvey('dashboard');
  }, []);
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 22,
        }}
        onPress={() => navigation.navigate('Test')}
      >
        Go to Test Screen
      </Text>
    </View>
  );
};
const Test = ({ navigation }) => {
  React.useEffect(() => {
    loadAliumSurvey('test');
  }, []);
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 22,
        }}
      >
        Test Screen
      </Text>
    </View>
  );
};
export default function App() {
  React.useEffect(() => {
    configure('https://assets.alium.co.in/cmmn/cstjn/cstjn_1038.json');
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
