import React, { Component } from 'react';
import PropTyoes from 'prop-types';
import List from 'material-ui/List';
import TodoContainer from '../containers/TodoContainer';
import Paper from 'material-ui/Paper';

export default class TodoList extends Component {

    static propTypes = {
        todos: PropTyoes.arrayOf(PropTyoes.shape({
            message: PropTyoes.string.isRequired,
            id: PropTyoes.number.isRequired,
            complete: PropTyoes.bool.isRequired
        })).isRequired
    };

    renderTodos() {
        return this.props.todos.map((todo, i) => <TodoContainer key={todo.id} {...todo} index={i}/>)
    }

    renderCount() {
        if(this.props.todos.length) {
            const activeTodos = this.props.todos.filter(todo => !todo.complete);

            let itemStr = 'items';

            if (activeTodos.length === 1) {
                itemStr = 'item';
            }

            return (
                <p>
                    <strong>{ activeTodos.length }</strong> { itemStr } left
                </p>
            )
        }

        return null;
        
    }

    render() {

        return (
            <div className="row center-xs">
                <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 center-xs" style={{wordWrap: 'break-word'}}>
                    {
                        this.renderCount()
                    }
                    <Paper>

                        <List style={{padding: 0}}>
                            {
                                this.renderTodos()
                            }
                        </List>
                    </Paper>
                </div>
            </div>

        )

    }


}