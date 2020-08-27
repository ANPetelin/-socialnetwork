import React from 'react';
import axios from 'axios';
 
export default class PersonList extends React.Component {
  state = {
    posts: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        const posts= res.data;
        console.log(posts);
        this.setState({ posts});
      })
  }
 
  render() {
    return (
      <ol>
        { this.state.posts.map(person => <li>{person.title}</li>) }
      </ol>
    )
  }
}