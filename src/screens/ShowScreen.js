import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
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

ShowScreen.navigationOptions = ({
  navigation }) => {
  return {
    headerRight: <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
      <EvilIcons name="pencil" style={styles.headerEditIcon} />
    </TouchableOpacity>
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 'bold'
  },
  content: {
    fontSize: 20
  },
  headerEditIcon: {
    fontSize: 30,
    marginRight: 30
  }
});

export default ShowScreen;