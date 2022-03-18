import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Reset } from 'styled-reset';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';

function App() {
  return (
    <>
      <Reset />
      <JoinPage />
    </>
  );
}

export default App;
