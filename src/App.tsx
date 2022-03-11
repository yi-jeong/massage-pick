import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Reset } from 'styled-reset';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <>
      <Reset />
      <DetailPage />
    </>
  );
}

export default App;
