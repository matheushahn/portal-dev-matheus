import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-app-polyfill/ie11';
import '@ui5/webcomponents-base/dist/features/browsersupport/IE11';
import '@ui5/webcomponents-react-base/polyfill/IE11';
import '@webcomponents/webcomponentsjs/webcomponents-bundle';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const configureBackgroundColor = () => {
  let color = window.localStorage.getItem("backgroundColor") || "#f8f8f8";
  document.body.style.backgroundColor = color;
};

configureBackgroundColor();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
