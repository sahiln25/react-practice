import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, deleteTodo, clearTodo } from '../actions';
import moment from 'moment';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            dueDate: ''
        }
    }

    addTodo() {
        this.props.addTodo(this.state.text, this.state.dueDate);
    }

    deleteTodo(id) {
        this.props.deleteTodo(id);
    }

    clearTodo() {
        this.props.clearTodo();
    }

    renderTodos() {
        const {todos} = this.props;

        return(
            <ul className="list-group col-sm-4">
                {
                    todos.map((todo, i) => {
                        return (
                            <li key={todo.id} className="list-group-item">
                                <div className="list-item">
                                    <div>{todo.text}</div>
                                    <div><em>{moment(new Date(todo.dueDate)).fromNow()}</em></div>
                                </div>
                                <div className="list-item delete-button" onClick={() => this.deleteTodo(todo.id)}>&#x2715;</div>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }

    render() {
        console.log(this.props);
        return (
            <div className="app">
                <div className="title">To-do App</div>
                <div className="form-inline todo-form">
                    <div className="form-group">
                        <input className="form-control" placeholder="I have to..." onChange={(event) => this.setState({text: event.target.value})}/>
                        <input className="form-control" type="datetime-local" onChange={(event) => this.setState({dueDate: event.target.value})} />
                    </div>
                    <button type="button" className="btn btn-success" onClick={() => this.addTodo()}>Add Item</button>
                    <button type="button" className="btn btn-danger" onClick={() => this.clearTodo()}>Clear Todos</button>
                </div>
                {this.renderTodos()}
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        todos: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addTodo, deleteTodo, clearTodo}, dispatch);
};

export default connect(mapStatetoProps, mapDispatchToProps)(App);