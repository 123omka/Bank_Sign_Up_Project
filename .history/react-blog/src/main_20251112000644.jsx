import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";
import {store} from './app/store'
import  {Provider}  from ''






ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Provider  store={store}>
    <App/>
    </Provider>
     
  

  </>
)