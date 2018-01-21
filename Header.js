import React, { Component } from 'react';
class Header extends Component{
		constructor(){
			super();
			this.state={
				name:"Unlike",
				count:0
			};
		}

render(){
   
    return(
        <div>
            <h1>Apichat Love </h1>
            <h2>{this.state.name}</h2>
             <h2>{this.state.count}</h2>
             <h1><a href="/">Home</a></h1>
        </div>
      );
  }
    
}
export default Header;