import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ItemAdd from './components/ItemAdd';

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar />
      <Home />
      <StatusBar style="auto" />
      {/* <ItemAdd /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
