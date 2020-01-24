import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'
ReactDOM.render(<App />, document.getElementById('root'));

/*
  A promise is an object representing the eventual
  completion or failure of an asynchronous
  operation. A promise can have three distinc states:
  1. The promise is pending: It means that the final
  value (one of the following two) is not available yet.

  2. The promise is fullfilled: It means that the operation
  has completed and the final value is available, which
  generally is a successful operation. This state is
  sometimes also called RESOLVED.

  3. The promise is rejected: It means that an error prevented the final value
  from being determined, which generally represents a failed operation.
*/
const promise = axios.get("http://localhost:3001/notes")

promise.then(response => {
  console.log(response)
})

// const promise2 = axios.get('http://localhost:3001/foobar')
// console.log(promise2)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
