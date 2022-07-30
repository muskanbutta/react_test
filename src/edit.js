import React from 'react';
import axios from 'axios';
import Add from './add';

class Edit extends React.Component { 
  state={
    todo_id: '',
    todo_title: '',
  }

  handleChange = event => {
    this.setState({[event.target.name] : event.target.value});
  }

  handleSubmit = (event) => { 
    event.preventDefault();

    let formData = new FormData();
    console.log(typeof(formData));
    formData.append('todo_id', this.state.todo_id)
    formData.append('todo_title', this.state.todo_title)
    console.log(formData);

    axios.post('https://akashsir.in/myapi/crud/todo-edit-api.php', formData)
    .then(function (response) {
      console.log(response);
      if(response.data.flag == 1){
        var msg = response.data.message;
        console.log('Record Added' + msg);
      }
    }).catch(function (response) {
      console.log(response);
    });
	}
  render() {
    return (
      <>
	  <form onSubmit={this.handleSubmit}>
          <label>
          <h1>Edit</h1>
            Todo Id: <input type="text" name="todo_id" onChange={this.handleChange}/><br/>
            Todo Title: <input type="text" name="todo_title" onChange={this.handleChange}/><br/>
          </label>
          <button type="submit">Add</button>
        </form>
      </>
    );
  }

}

export default Edit;