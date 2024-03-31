import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Separator } from 'react-native';


const turnLightOn = async function () {
  const response = await fetch('http://localhost:3000/light/on', {
    method: 'GET'
  });
  console.log(response);

  return await response.json();
}

const turnLightOff = async function () {
  const response = await fetch('http://localhost:3000/light/off', {
    method: 'GET'
  });
  console.log(response);

  return await response.json();
}

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      <View>
        <Button
          title="Turn Light On"
          color="#91e6a2"
          onPress={turnLightOn}
        />
      </View>
      <View>
        <Button
          title="Turn Light Off"
          color="#4b4f54"
          onPress={turnLightOff}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9991e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
