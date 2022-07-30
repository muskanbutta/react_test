import React from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class List extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }

    delete_button = (todo_id) => {
        alert('Do you want to delete this item?');
        let formData = new FormData();
        formData.append('todo_id', todo_id)
        console.log(formData);
        
        const notify = () => {
            console.log('s');
            toast.success("Success Notification !");
        }
        axios.post('https://akashsir.in/myapi/crud/todo-delete-api.php', formData)
        .then(function (response) {
          console.log(response);
          if(response.data.flag == 1){
            var msg = response.data.message;
            console.log('Record deleted' + msg);
            {notify()}
          }
        }).catch(function (response) {
          console.log(response);
        });

    }
    edit_button = (todo_id, todo_title) => {
        let formData = new FormData();
        formData.append('todo_id', 1105)
        formData.append('todo_title', 'a')
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
    componentDidMount() {
        fetch('https://akashsir.in/myapi/crud/todo-list-api.php')
        .then(response => response.json())
        .then(response => {
            let myobj = response.todo_list;
            this.setState({
                items: myobj
            })
        })
    }
    render() {
        var myobj2 = this.state.items;
    return (
      <>
        <table>
            <thead>
                <tr>
                    <th>List Id</th>
                    <th>List Title</th>
                    <th>List Detail</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {myobj2.map(item => (
                <tr>
                    <td data-column="First Name">{item.todo_id}</td>
                    <td data-column="Last Name">{item.todo_title}</td>
                    <td data-column="Job Title">{item.todo_details}</td>
                    <td data-column="Job Title"><button className='edit_button' onClick={this.edit_button.bind(item.todo_id, item.todo_title)}>Edit</button></td>
                    <td data-column="Job Title"><button className='delete_button' onClick={this.delete_button.bind(' ', item.todo_id)}>Delete</button></td>
                </tr>
                ))}
                <ToastContainer/>
            </tbody>
        </table>
      </>
    );
  }

}
export default List;