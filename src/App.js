import React, { Component } from 'react';
import './styles/app.css';
import TodoInputContainer from './containers/TodoInputContainer';
import TodoListContainer from './containers/TodoListContainer';

class App extends Component {
  render() {
    return (
        <div className="col-xs-12">
            <div className="row center-xs">
                <div className="col-xs-12">
                    <div className="row row-tall">
                        <div className="col-xs-12 center-xs">
                            <h1>TODO</h1>
                        </div>
                    </div>
                    <div className="row row-tall">
                        <div className="col-xs-12 center-xs">
                            <TodoInputContainer/>
                        </div>
                    </div>
                    <div className="row row-tall">
                        <div className="col-xs-12 center-xs">
                            <TodoListContainer/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
