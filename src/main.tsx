import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import 'virtual:windi.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className={"flex items-center justify-center h-screen"}>
      <App />
    </div>
  </React.StrictMode>
)
