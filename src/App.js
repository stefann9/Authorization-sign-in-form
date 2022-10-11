import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      // user1:{username:'stefan', password:'ilikedogs', authorized:false}
    }
  }
  render(){
    return (
      <div className="App">
        <h1>Enter the password</h1>
        <form action='#'>
            <input type='text' placeholder='username'/>
            <input type='password' placeholder='password'/>
            <button>Sign in</button>
        </form>
      </div>
    );
  }
}

export default App;
