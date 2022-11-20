import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import stor from './reducers/ConfigureStore';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux'
import Reducers from './reducers/index'
import thunk from 'redux-thunk'

const store=createStore(Reducers,compose(applyMiddleware(thunk)))
ReactDOM.render(
    <React.StrictMode>
    <Provider store={store}>

               
                    <App />
                </Provider>  
    </React.StrictMode>,
    document.getElementById("root")
);