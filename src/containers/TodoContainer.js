import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    deleteTodo,
    completeTodo,
    unCompleteTodo
} from '../redux/actions/app.actions';
import Todo from '../components/Todo';


export default connect(null, { deleteTodo, completeTodo, unCompleteTodo })(Todo);
