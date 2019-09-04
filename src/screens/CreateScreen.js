import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Title:</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput
          style={styles.input}
          value={content}
          onChangeText={(text) => setContent(text)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  inputContainer: {
    marginVertical: 10
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 15,
    borderRadius: 3,
    height: 45
  },
  label: {
    fontSize: 20,
    marginBottom: 10
  }
});

export default CreateScreen;