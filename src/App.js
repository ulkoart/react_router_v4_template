import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
}

const NotFound = () => <h2> 404 - Page not found </h2>

const Login = () => <h2> Login Page </h2>

const Home = () => <h2> Home </h2>

const Task = (props) => <h2> Task {props.match.params.taskId} </h2>

const TaskList = () => (
  <div>
     <ul>
      <li><Link to={`/task-list/${guid()}`}>Task 1</Link></li>
      <li><Link to={`/task-list/${guid()}`}>Task 2</Link></li>
      <li><Link to={`/task-list/${guid()}`}>Task 3</Link></li>
    </ul>
  </div>
)

class Main extends Component {
  render() {
    console.log()
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/task-list">Task List</Link></li>
        </ul>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/task-list" component={TaskList}/>
        <Route path='/task-list/:taskId' component={Task}/>
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
          <Redirect to="/login" />
        </Switch>
      </div>
    )
  }
}

export default App;
