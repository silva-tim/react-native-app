import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useState } from 'react';
import ItemAdd from './ItemAdd';

export default function Home() {
  const [itemAdd, setItemAdd] = useState(false);
  const [type, setType] = useState('');

  if (itemAdd) {
    return <ItemAdd onCancel={() => setItemAdd(false)} />;
  }

  return (
    <View style={{ backgroundColor: 'white', height: 1000 }}>
      <ScrollView>
        <View
          style={{ backgroundColor: '#31B6A8', height: 350, paddingTop: 35 }}
        >
          <View style={styles.view}>
            <Text style={styles.text}>Income</Text>
            <Text style={styles.text}>Expenses</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>$5,000</Text>
            <Text style={styles.text}>$4,500 of $5,000</Text>
          </View>
          <View style={styles.barsContainer}>
            <View style={styles.bars} />
            <View style={[styles.bars, { backgroundColor: 'red' }]} />
          </View>
        </View>
        <View style={{ backgroundColor: 'white' }}>
          <Pressable onPress={() => setItemAdd(true)} style={styles.button}>
            <Text style={styles.buttonText}>Add Expense</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Add Income</Text>
          </Pressable>
          <Text style={styles.changesHeader}>Recent Changes</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingBottom: 10,
            }}
          >
            <Text style={{ fontSize: 20, color: 'red' }}>- $40</Text>
            <Text style={{ fontSize: 20 }}>Restaurants</Text>
            <Text style={{ fontSize: 20 }}>Aug. 10</Text>
          </View>
        </View>
        <View style={styles.overscroll} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  view: {
    flexDirection: 'row',
    gap: 150,
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  bars: {
    height: 180,
    backgroundColor: 'white',
    flex: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  barsContainer: {
    height: 200,
    flexDirection: 'row',
    gap: 50,
    alignItems: 'flex-end',
    paddingHorizontal: 40,
  },
  button: {
    backgroundColor: '#31B6A8',
    height: 60,
    marginHorizontal: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100%',
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
  },
  overscroll: {
    backgroundColor: '#31B6A8',
    height: 1000,
    position: 'absolute',
    top: -1000,
    left: 0,
    right: 0,
  },
  changesHeader: {
    textAlign: 'center',
    fontSize: 25,
    paddingVertical: 10,
  },
});
