import React from "react";
import AddTodo from './AddTodo';
// import { toast } from 'react-toastify';

class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'study English' },
            { id: 'todo3', title: 'study React' },
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo],
        })

        // toast.success("Wow so easy!");
    }
    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodos
        })
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).lenght === 0;
        if (isEmptyObj === false && editTodo.id === todo.id) {

            let listTodoCopy = [...listTodos]

            //Find index of specific object using findIndex method.    
            let objIndex = listTodoCopy.findIndex((item => item.id === todo.id));

            listTodoCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodoCopy,
                editTodo: {}
            })

            return;
        }
        this.setState({
            editTodo: todo
        })

    }
    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).lenght === 0;
        console.log('=====' + isEmptyObj)
        return (
            <>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <div className="list-todo-container">
                    <AddTodo
                        addNewTodo={this.addNewTodo}
                    />
                    <div className="list-todo-content">
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child">
                                        {isEmptyObj === true ?
                                            <span>{index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input value={editTodo.title}
                                                            onChange={(event) => this.handleOnchangeEditTodo(event)}
                                                        />
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item.title}
                                                    </span>
                                                }
                                            </>

                                        }
                                        <button className="edit"
                                            onClick={() => this.handleEditTodo(item)}
                                        >
                                            {isEmptyObj === false && editTodo.id === item.id ?
                                                "save" : "Edit"
                                            }
                                        </button>
                                        <button className="delete"
                                            onClick={() => this.handleDeleteTodo(item)}
                                        >Delete</button>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </>
        )
    }
}

export default ListTodo;