import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './App.tsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
