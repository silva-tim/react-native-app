import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';
import { TextInputMask } from 'react-native-masked-text';

export default function ItemAdd() {
  const [input, setInput] = useState('0');

  return (
    <View>
      <View style={{ paddingTop: 50 }} />
      <View
        style={{
          borderBottomWidth: 1,
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
          paddingHorizontal: 5,
        }}
      >
        <Text style={{ flex: 1, fontSize: 18 }}>Cancel</Text>
        <Text style={{ flex: 1, textAlign: 'center', fontSize: 20 }}>
          Add Expense
        </Text>
        <View style={{ flex: 1 }} />
      </View>
      <TextInputMask
        type={'money'}
        options={{
          precision: 2,
          separator: '.',
          delimiter: ',',
          unit: '$',
          suffixUnit: '',
        }}
        value={input}
        onChangeText={(text) => setInput(text)}
        style={{
          borderBottomWidth: 1,
          height: '60%',
          textAlign: 'center',
          fontSize: 40,
        }}
        autoFocus
      />
    </View>
  );
}
