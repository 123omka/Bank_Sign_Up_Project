import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";
import {store} from './app/store'






ReactDOM.createRoot(document.getElementById('root')).render(
  <>
<Provider store={store}>   {/* ✅ wrap App with Provider */}
      <App />
    </Provider>

  </>
)