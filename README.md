# TodoMVC in React

> A Todo Single Page App built to show how one would implement an MVC pattern in React. This app will track your TODOs and allows you to complete and delete them. It persists your TODOs in the Browser's LocalStorage

## Resources

- [React](https://reactjs.org/)
- [Create React App](https://github.com/facebook/create-react-app)
- [Redux](https://github.com/reactjs/react-redux)
- [Material-UI](https://material-ui-next.com/)

## Implementation

This TODO App was bootstrapped using [Create React App](https://github.com/facebook/create-react-app). It doesnt completely follow the folder structure recommended in the spec; it is very close to it though.
I decided to use [Create React App](https://github.com/facebook/create-react-app) because I did not want to waste time on setting up a build process for the project. I wanted to spend most of my time showcasing how I would implement a TODO MVC in React, not how to configure a webpack config file to build a React project.
I also decided to use [Material-UI](https://material-ui-next.com/) as my component Library. The test was a little vague on how it would like me to style the components, so I decided to use a proven component library to theme the project. I mainly decided to use [Material-UI](https://material-ui-next.com/) because I did not want to waste too much time on styling my components. In addition, I wanted to learn their new 1.0 version that is in beta; so I took this as an opportunity to learn a new Component Library (a win win situation)

The app utilizes [Redux](https://github.com/reactjs/react-redux) in order to keep the app's state. Redux allows me to show you how exactly each component might change the state of the app and easily allows me to store the entire state of the app in LocalStorage, so when we reload the page you can pick up your TODOs where you left off.
Redux is a go-to implementation of the Flux Architecture and I felt it was important to demonstrate the benefits of it using Redux.

All functionality described in the spec is present.

## Installation Steps
1. cd to project
2. ```npm install```
3. ```npm start```

## Run and Build
To run the project locally, run ```npm start``` this will build the project and serve it on localhost:8080.

To build the project for production run ```npm run build``` this will build a production ready bundle and output it to the ```/build``` folder. Ultimately you'd have a webserver like ```ngnix``` serve this folder.

## Tests
Unit Tests should have a postfix of ```.test.js``` and should live in the same folder as the component that they test.

To run the tests run ```npm test```


## Credit

Created by [Jonathan Go](https://github.com/jongo593)