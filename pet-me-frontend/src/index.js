import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Modal from './Modal'
import { BrowserRouter } from "react-router-dom"
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import petReducer from './reducer/allReducer'
import './App.css'

const store = createStore(petReducer, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}> <BrowserRouter> <Modal /><App /> </BrowserRouter></Provider>, document.getElementById('root'));
