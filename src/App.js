import React from 'react';
import { FormAuth } from './components/form-auth/form-auth.component';


import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      user1:{username:'stefan', password:'ilikedogs', authorized:false}
    }
  }
  render(){
    return (
      <div className="App">
        <h1>Enter the password</h1>
        <FormAuth user1={this.state.user1}/>
      </div>
    );
  }
}

export default App;
