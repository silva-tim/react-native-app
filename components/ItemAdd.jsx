import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Pressable,
} from 'react-native';
import { useState } from 'react';
import { TextInputMask } from 'react-native-masked-text';

export default function ItemAdd({ onCancel, type }) {
  const [input, setInput] = useState('0');

  return (
    <View style={styles.container}>
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
        <Pressable onPress={onCancel} style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, paddingStart: 10, color: '#31B6A8' }}>
            Cancel
          </Text>
        </Pressable>
        <Text style={{ flex: 1, textAlign: 'center', fontSize: 20 }}>
          Add {type}
        </Text>
        <View style={{ flex: 1 }} />
      </View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
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
            height: '40%',
            textAlign: 'center',
            fontSize: 40,
          }}
          autofocus
        />
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Choose a category</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  buttonText: {
    fontSize: 20,
  },
  container: {
    position: 'absolute',
    zIndex: 10,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
  },
});
