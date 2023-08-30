import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={{ backgroundColor: '#31B6A8', height: 350, paddingTop: 50 }}>
      <View style={styles.view}>
        <Text style={styles.text}>Income</Text>
        <Text style={styles.text}>Expenses</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>$5,000</Text>
        <Text style={styles.text}>$4,500 of $5,000</Text>
      </View>
      <View
        style={{
          height: 200,
          flexDirection: 'row',
          gap: 50,
          alignItems: 'flex-end',
          paddingHorizontal: 40,
        }}
      >
        <View style={styles.bars}></View>
        <View style={styles.bars}></View>
      </View>
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
});
