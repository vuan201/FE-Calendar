import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import 'rsuite/dist/rsuite.min.css';  // or 'rsuite/styles/index.less';
import { CustomProvider } from 'rsuite';
import locale from "./Constant/Locate.js";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomProvider theme="dark" locale={locale}>
      <App />
    </CustomProvider>
  </React.StrictMode>,
)
