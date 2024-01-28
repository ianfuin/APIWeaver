import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Routes,Route } from "react-router-dom";
import App from './App.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const Test = ()=>{
  return <div> Test </div>
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
   <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
      </Routes>
  </BrowserRouter>
);