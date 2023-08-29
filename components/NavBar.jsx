import { View, Text, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function NavBar() {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 50,
      }}
    >
      <View style={{ flex: 1 }}>
        <Pressable style={{ paddingStart: 10 }}>
          <Feather name="menu" size={40} color="black" />
        </Pressable>
      </View>
      <Text style={{ flex: 1, textAlign: 'center', fontSize: 30 }}>Budget</Text>
      <View style={{ flex: 1 }} />
    </View>
  );
}
