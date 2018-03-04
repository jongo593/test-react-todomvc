import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    addTodo
} from '../redux/actions/app.actions';
import TodoInput from '../components/TodoInput';

export default connect(null, { addTodo })(TodoInput);
