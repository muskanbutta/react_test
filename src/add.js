import React from 'react';
import axios from 'axios';

class Add extends React.Component { 
  state={
	 todo_title: '',
	 todo_details: '',
  }

  handleChange = event => {
    this.setState({[event.target.name] : event.target.value});
  }

  handleSubmit = (event) => { 
    event.preventDefault();

    let formData = new FormData();
    console.log(typeof(formData));
    formData.append('todo_title', this.state.todo_title)
    formData.append('todo_details', this.state.todo_details)
    console.log(formData);

    axios.post('https://akashsir.in/myapi/crud/todo-add-api.php', formData)
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
    // console.log('formData' + formData);
    return (
      <>
	  <form onSubmit={this.handleSubmit} style={{display:'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', margin: '0 auto'}}>
          <label>
          <h1><center>Add Item</center></h1>
            Todo Title: <input type="text" name="todo_title" onChange={this.handleChange}/><br/><br/>
            Todo detail: <input type="text" name="todo_details" onChange={this.handleChange}/><br/><br/>
          </label>
          <button type="submit">Add</button>
        </form>
      </>
    );
  }

}

export default Add;