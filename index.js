import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();

// Vulnerable code: Improper Input Validation (CWE-20)
function greetUser() {
  var name = document.getElementById('nameInput').value;
  var greeting = 'Hello, ' + name + '!';
  document.getElementById('greetingText').innerHTML = greeting;
}
