import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {InputAdornment} from 'material-ui/Input';
import AddIcon from 'material-ui-icons/Add';
import PropTypes from 'prop-types';
export const ENTER_KEY_EVENT = 'Enter';

export default class TodoInput extends Component {

    static propTypes = {
        addTodo: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            todoInputValue: ''
        }
    }

    handleOnChange = (e) => {
        this.setState({
            todoInputValue: e.target.value
        });
    };

    handleKeyPress = (e) => {
        if(e.key === ENTER_KEY_EVENT) {
            e.preventDefault();
            this.handleSubmit(e);
        }
    };

    handleSubmit = (e) => {
        return this.addTodo(e.target.value)
    };

    handleSubmitClick = () => {
        return this.addTodo(this.state.todoInputValue);
    };

    validateInput(value = '') {
        return value.trim();
    }

    addTodo(value) {
        const v = this.validateInput(value);
        if(!v) {
            return null;
        }

        this.props.addTodo(v);
        this.setState({
            todoInputValue: ''
        });
        return v;
    }

    render() {
        return (
        <div className="row center-xs">
            <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 center-xs">
                <form name="todo_form">
                <TextField
                    fullWidth={true}
                    value={this.state.todoInputValue}
                    onChange={this.handleOnChange}
                    autoFocus={true}
                    label="What needs to be done?"
                    inputProps={{
                        onKeyPress: this.handleKeyPress
                    }}
                    InputProps={{
                        endAdornment: <InputAdornment className="cursor-pointer" position="end" onClick={this.handleSubmitClick}><AddIcon/></InputAdornment>
                    }}
                />
            </form>
            </div>
        </div>

        )
    }
}
