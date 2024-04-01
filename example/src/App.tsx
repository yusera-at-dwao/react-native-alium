import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { multiply, showSurvey, configure } from 'react-native-alium';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
    configure('');
    showSurvey('home');
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Text
        style={{
          fontSize: 22,
        }}
        onPress={() => showSurvey('dashboard')}
      >
        dashboard
      </Text>
    </View>
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
