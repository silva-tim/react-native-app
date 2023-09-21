import { View, Text, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Menu() {
  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 10,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
      }}
    >
      <View
        style={{
          paddingTop: 70,
          paddingStart: 30,
          backgroundColor: 'white',
          width: 350,
          height: 1000,
        }}
      >
        <Text
          style={{
            textDecorationLine: 'underline',
            fontSize: 30,
            fontWeight: 600,
            paddingBottom: 30,
          }}
        >
          Menu
        </Text>
        <Text style={styles.text}>
          <AntDesign name="home" size={24} color="#31B6A8" /> Overview
        </Text>
        <Text style={styles.text}>
          <AntDesign name="shoppingcart" size={24} color="#31B6A8" /> Expense
          Details
        </Text>
        <Text style={styles.text}>
          <AntDesign name="inbox" size={24} color="#31B6A8" /> Income Details
        </Text>
        <Text style={styles.text}>
          <AntDesign name="creditcard" size={24} color="#31B6A8" /> Transactions
        </Text>
        <Text style={styles.text}>
          <AntDesign name="pluscircleo" size={24} color="#31B6A8" /> Add Expense
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    paddingBottom: 30,
  },
});
