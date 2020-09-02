import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Posts from './components/Posts';
import User from './components/User';
import './App.scss';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <p>Социальная сеть</p>
      </Header>
      <Content className="content">
        <Router>
          <Switch>
            <Route exact path="/">
              <Posts />
            </Route>
            <Route path="/user/:id">
              <User />
            </Route>
          </Switch>
        </Router>
      </Content>
      <Footer>facebook</Footer>
    </Layout>
  );
}

export default App;

