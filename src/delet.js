import React from 'react';
import axios from 'axios';

class Delete extends React.Component { 
  state={
    todo_id: ''
  }

  handleChange = event => {
    this.setState({[event.target.name] : event.target.value});
  }

  handleSubmit = (event) => { 
    event.preventDefault();

    let formData = new FormData();
    console.log(typeof(formData));
    formData.append('todo_id', this.state.todo_id)
    console.log(formData);

    axios.post('https://akashsir.in/myapi/crud/todo-delete-api.php', formData)
    .then(function (response) {
      console.log(response);
      if(response.data.flag == 1){
        var msg = response.data.message;
        console.log('Record deleted' + msg);
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
          <h1>Delete</h1>
            Todo Id: <input type="text" name="todo_id" onChange={this.handleChange}/><br/>
          </label>
          <button type="submit">Add</button>
        </form>
      </>
    );
  }

}

export default Delete;