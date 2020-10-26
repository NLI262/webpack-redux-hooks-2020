import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import rootReducer from './js/slices/index'
import App from "./js/components/App";
const store = configureStore({ reducer: rootReducer })

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Provider store={store}><App /></Provider>, wrapper) : false;