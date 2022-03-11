import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Reset } from 'styled-reset';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <>
      <Reset />
      <SearchPage />
    </>
  );
}

export default App;
