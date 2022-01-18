import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <a
                className="App-link"
                target="_blank"
                rel="noopener noreferrer">
                PFSwChO – zadanie nr 1

            </a>
            <p>Tomasz Kamiński</p>
                <Link to="/docs">Dokumentacja</Link>
                <Link to="/fibcal">Kalkulator</Link>
            </header>
        </div>
    );
  };
