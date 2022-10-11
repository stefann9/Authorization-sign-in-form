import React from "react";

export class Secret extends React.Component{
    onClick = ()=>{
        this.props.onClick(false)
    }
    render(){
        return(<div className='secretInfo'>
        <h1>Some important stuff</h1>
        <button onClick={this.onClick}>Log out</button>
      </div>);
    }
} 