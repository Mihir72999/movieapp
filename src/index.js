import React from 'react'
import reactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './state/store'


reactDOM.createRoot(document.querySelector('#root')).render(

    <React.StrictMode>
       <Provider store={store}>
        <App />
        </Provider> 
    </React.StrictMode>
)


