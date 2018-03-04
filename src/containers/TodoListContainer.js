import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

export function mapStateToProps(state) {
    return {
        todos: state.app.todos
    }
}

export default connect(mapStateToProps)(TodoList);
