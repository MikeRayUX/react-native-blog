import React, { useContext } from 'react';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);

  const id = navigation.getParam('id')

  const blogPost = state.find((post) => post.id == id);

  return (
    <BlogPostForm
      initialValues={{
        title: blogPost.title, content: blogPost.content
      }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }}
    />
  )
}

export default EditScreen;