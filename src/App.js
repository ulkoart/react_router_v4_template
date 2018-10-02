import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

const Login = () => <h2> Login Page </h2>

const Home = () => <h2> Home </h2>

const TaskList = () => (
  <div>
     <ul>
      <li>Task 1</li>
      <li>Task 2</li>
      <li>Task 3</li>
    </ul>
  </div>
)

class Main extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/task-list">Task List</Link></li>
        </ul>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/task-list" component={TaskList}/>
        </Switch>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Main}/>
        </Switch>
      </div>
    )
  }
}

export default App;