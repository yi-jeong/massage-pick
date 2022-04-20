import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes , Route } from 'react-router-dom';
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
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/detail" element={<DetailPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/join" element={<JoinPage />}></Route>     
      </Routes>
    </>
  );
}

export default App;
