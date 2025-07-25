import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { LiffProvider } from './contexts/LiffProvider';
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsx(LiffProvider, { children: _jsx(App, {}) }) }));
