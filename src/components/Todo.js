import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemSecondaryAction, ListItemText, ListItemIcon } from 'material-ui/List';
import DeleteIcon from 'material-ui-icons/Delete';
import IconButton from 'material-ui/IconButton';
import CheckBoxOutlineBlank from 'material-ui-icons/CheckBoxOutlineBlank';
import CheckBox from 'material-ui-icons/CheckBox';

import {
    red,
    green
} from 'material-ui/colors';
import Divier from 'material-ui/Divider';

export default class Todo extends Component {

    static propTypes = {
        deleteTodo: PropTypes.func.isRequired,
        completeTodo: PropTypes.func.isRequired,
        unCompleteTodo: PropTypes.func.isRequired,
        complete: PropTypes.bool.isRequired,
        message: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        index: PropTypes.number.isRequired
    };

    handleDelete = () => {
        return this.props.deleteTodo(this.props.index);
    };

    handleComplete = () => {
        return this.props.completeTodo(this.props.index);
    };

    handleUnComplete = () => {
        return this.props.unCompleteTodo(this.props.index);
    };

    renderCheck = () => {
        if(this.props.complete) {
            return (
                <IconButton onClick={this.handleUnComplete}>
                    <CheckBox style={{color: green[500]}}/>
                </IconButton>
            );
        }

        return (
            <IconButton onClick={this.handleComplete}>
                <CheckBoxOutlineBlank/>
            </IconButton>
        );
    };

    render() {
        return (
            <div className="todo-container">
                <ListItem>
                    <ListItemIcon>
                        {
                            this.renderCheck()
                        }
                    </ListItemIcon>
                    <ListItemText primary={this.props.message}/>
                    <ListItemSecondaryAction className="destroy">
                        <IconButton onClick={this.handleDelete}>
                            <DeleteIcon  style={{color: red[500]}}/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divier/>
            </div>
        );
    }
}