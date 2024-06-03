import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/app.scss';
import { appRouter } from './App.jsx';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './components/context/ThemeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  </React.StrictMode>,
)
