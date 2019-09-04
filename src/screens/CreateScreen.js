import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withOrientation } from 'react-navigation';

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
      <TouchableOpacity
        style={styles.createButton}
      >
        <Text
          style={styles.createButtonText}>
          Create
        </Text>
      </TouchableOpacity>
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
    paddingVertical: 5,
    paddingLeft: 15,
    borderRadius: 3,
    height: 45
  },
  label: {
    fontSize: 20,
    marginBottom: 10
  },
  createButton: {
    paddingVertical: 12,
    paddingHorizontal: 27,
    backgroundColor: '#426EFF',
    marginVertical: 20,
    borderRadius: 40,
    width: 175,
    marginLeft: 'auto'
  },
  createButtonText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  }
});

export default CreateScreen;