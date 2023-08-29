import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.container}></View>
      <View style={{ flex: 1.5, backgroundColor: 'white' }}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31B6A8',
  },
});
