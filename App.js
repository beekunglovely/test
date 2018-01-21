import React, { Component } from 'react';

//สร้าง component jsx

class App extends Component {

  
  render(){
   
    return(
        <div>
          <h1>หน้าหลัก</h1>
          <h1><a href="/Login">Login</a></h1>
          <h1><a href="/Header">Header</a></h1>
          <h1><a href="/Content">Content</a></h1>
          <h1><a href="/Footer">Footer</a></h1>
          <h1><a href="/">Home</a></h1>

        </div>
      );
  }
    
}




export default App;
