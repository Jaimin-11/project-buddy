import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.style.css';

import App from './App';
import ProjectList from './components/ProjectList';
import NewProject from './components/NewProject';
import ViewProject from './components/ViewProject';
import Dashboard from './components/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} >
              <Route index element={<Dashboard />} />
              <Route path="showAll" element={<ProjectList />} />
              <Route path="addProject" element={<NewProject />} />
              <Route path="viewProject" element={<ViewProject />} />
              <Route path="*" element={<p>No page</p>} />
            </Route>
          </Routes>
        </BrowserRouter>
  </React.StrictMode>
);