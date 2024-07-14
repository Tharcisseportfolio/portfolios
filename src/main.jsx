import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import App from './App';
import Projects from './component/projects/Projects';
import './index.css';
import Experience from './component/experience/Experience';

const container = document.getElementById('root');
const root = createRoot(container); // Create a root.


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Experience',
    element: <Experience />,
  },
  {
    path: '/Projects',
    element: <Projects/>,
  },

]);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);