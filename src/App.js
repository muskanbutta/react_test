import React from 'react';
import Add from './add';
import List from './list';
import Edit from './edit';
import Delete from './delet';
import './App.css';
class App extends React.Component { 
  render() {
    return (
      <>
      <center><h2>TODO List</h2></center>
      <Add/>
      {/* 
      <Edit/>
      <Delete/> */}
      <List/>
      </>
    );
  }

}
export default App;