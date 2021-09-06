import React, { Component } from 'react';
import UserInput from './components/UserInput'
import ConnectedUsers from './components/Users'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    console.log(this.props.users)
    return (
      <div className="App">
        <UserInput />
        <ConnectedUsers />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users}
}

export default connect(mapStateToProps)(App);
