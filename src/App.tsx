import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ExperiencePage from './ExperiencePage';
import FilmWorksPage from './FilmWorksPage';
import GameWorksPage from './GameWorksPage';
import ContactPage from './ContactPage';
import Navigation from './Navigation';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/film-works" element={<FilmWorksPage />} />
        <Route path="/game-works" element={<GameWorksPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;