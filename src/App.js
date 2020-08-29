import React from 'react';
import './App.scss';
import Posts from './components/Posts';
import FetchedPosts from './components/FetchedPosts';
import Message from './components/Message';
import User from './components/User/User';
import {connect} from 'react-redux';
import {createPost} from './redux/actions';
import { Button } from 'antd';

// async function func(url) {  
//   return axios.get(url)
// }

function App(props) {
  const [title, setTitle] = React.useState('')
  const submitHandler = event => {
    event.preventDefault()
    const newPost = {
      title, id: Date.now().toString()
    }
    if(!title.trim()) {
      return
    }
    props.createPost(newPost);
    setTitle('');
  }
  const changeImputHandler = event => {
    event.persist()
    setTitle(event.target.value)
  }

  // const click = () => {
  //   func('https://jsonplaceholder.typicode.com/posts?_limit=5').then(res => {
  //     res.map(t => console.log(t.title));
  //   })
  // console.log(props.state)
  //  }

  return (
    <div className="App">
      <Button type="primary">Primary Button</Button>
      <h1>React-Redux</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Заголовок поста</label>
          <input type="text" id="title" value ={title} name='title' onChange={changeImputHandler}/>
        </div>
        <Button type="primary">Создать</Button>
        <button type="submit">Создать</button>
      </form>
      <h2>Мои посты</h2>
      <Posts />
      <h2>Загруженные посты</h2>
      <FetchedPosts/>      
      <hr></hr>
      <Message/>
      <User/>
    </div>
  );
}

// const mapDispatchToProps = {
//   createPost 
// }

const mapDispatchToProps = dispatch => ({
  createPost: newPost => dispatch(createPost(newPost))
})

const mapStateToProps = state => {
  return {
      state: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
