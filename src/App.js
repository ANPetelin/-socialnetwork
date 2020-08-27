import React from 'react';
import './App.scss';
import Posts from './components/Posts';
import {connect} from 'react-redux';
import {createPost} from './redux/actions';
import FetchedPosts from './components/FetchedPosts';

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
  return (
    <div className="App">
      <h1>React-Redux</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Заголовок поста</label>
          <input type="text" id="title" value ={title} name='title' onChange={changeImputHandler}/>
        </div>
        <button type="submit">Создать</button>
      </form>
      <h2>Мои посты</h2>
      <Posts />
      <h2>Загруженные посты</h2>
      <FetchedPosts/>
    </div>
  );
}

// const mapDispatchToProps = {
//   createPost 
// }

const mapDispatchToProps = dispatch => ({
  createPost: newPost => dispatch(createPost(newPost))
})

export default connect(null, mapDispatchToProps)(App);
