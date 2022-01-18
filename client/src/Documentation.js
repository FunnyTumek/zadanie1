import React, { Component } from 'react';
import architectura from './architectura.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <header className="App-header">
            <h3>Architektura systemu</h3>
            <img src={architectura} alt="logo"/><br/>

            Projekt numer 1<br/>
                <p>Aplikcja została wykonana przy użyciu Reacta. Użyta baza danych to PostgreSQL</p>
                <p>W aplikacji umożliwiono obliczenie elemntów ciągu Fibonnaciego. Każde obliczenie zapisywane jest w historii.</p>
            Projekt został podzielony na trzy części:<br/>
                <p>Client:</p>
            <p>- Main.js - jest komponentem strony głównej</p><br/>
            <p>- Documentation.js - komponent odpowiedzialny za dokumentację projektu</p><br/>
            <p>- History.js - komponent wyświetlający historię ostatnich obliczeń ciągu fib</p><br/>
            <p>- Fib.js - metody umożliwiające komunikację</p><br/>
            <p>- App.js - odpowiedzialne za routing React'a</p><br/>
                <p>Server:</p>
                <p>- Index.js - dodawanie do bazy rekordów dla k maksymalnego 20</p>
                <p>Worker:</p>
                <p> -Index.js - oblicza ciąg Fibonacciego</p>
            <br/> <br/>
                        <Link to="/">Strona główna</Link>
            </header>
        </div>
    );
  };
