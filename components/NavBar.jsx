import { View, Text, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function NavBar() {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 50,
        height: 100,
        backgroundColor: '#31B6A8',
      }}
    >
      <View style={{ flex: 1 }}>
        <Pressable style={{ paddingStart: 10 }}>
          <Feather name="menu" size={40} color="white" />
        </Pressable>
      </View>
      <Text
        style={{ flex: 1, textAlign: 'center', fontSize: 30, color: 'white' }}
      >
        Budget
      </Text>
      <View style={{ flex: 1 }} />
    </View>
  );
}
