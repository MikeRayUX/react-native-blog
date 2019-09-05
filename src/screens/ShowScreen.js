import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const id = navigation.getParam('id')

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 'bold'
  },
  content: {
    fontSize: 20
  }
});

export default ShowScreen;