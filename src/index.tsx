
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store, { StoreType } from './components/redux/store';



let rerenderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} dispatchEvent={store.dispatchEvent.bind(store)} />
        </BrowserRouter>, document.getElementById('root'));

}

rerenderEntireTree(store);
store.subscribe(() => { rerenderEntireTree(store) });










// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


