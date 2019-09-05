import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

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
        onPress={() => onSubmit(title, content)}
      >
        <Text
          style={styles.createButtonText}>
          Save Post
        </Text>
      </TouchableOpacity>
    </View >
  )
}

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
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
})

export default BlogPostForm;