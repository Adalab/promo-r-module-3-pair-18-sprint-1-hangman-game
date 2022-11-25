// Fichero src/components/App.js
import '../styles/App.scss';
import { Fragment, useState } from 'react';
// import React from 'react';

function App() {
  const [numbeOfrErrors, setNumber] = useState(0);
  const [lastLetter, setlastLetter] = useState('');
  const [word, setWord] = useState('Katakroker');
  const [userLetters, setUserLetters] = useState([]);

  const handleClick = () => {
    setNumber(numbeOfrErrors + 1);
  };
  const handleClickLetter = (event) => {
    let re = /^[a-zA-ZñÑá-úÁ-Ú´]$/;
    if (re.test(event.target.value) || event.target.value === '') {
      setlastLetter(event.target.value);
      if (event.target.value !== '') {
        setUserLetters([...userLetters, event.target.value]);
      }
      // a lo que ya hay en userletters mete lastleter
    }
  };
  const renderPaint = () => {
    setNumber(numbeOfrErrors + 1);
  };
  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((eachLetter, index) => {
      if (userLetters.includes(eachLetter)) {
        return (
          <li key={index} className="letter">
            {eachLetter}
          </li>
        );
      } else {
        return <li key={index} className="letter"></li>;
      }
    });
  };
  const renderErrorLetters = () => {
    
    const wordLetters = word.split('');
    return userLetters.map((eachLetter, index) => {
      if (wordLetters.includes(eachLetter)) {
        // se puede vacio??????
      } else {
        // renderPaint();
        return (
          <li key={index} className="letter">
            {eachLetter}
          </li>
         
        );
      }
    });
  };


  return (
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>

            <ul className="letters">{renderSolutionLetters()}</ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">{renderErrorLetters()}</ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              onChange={handleClickLetter}
              value={lastLetter}
            />
          </form>
          <button onClick={handleClick}>Incrementar</button>
        </section>

        <section className={`dummy error-${numbeOfrErrors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
    </div>
  );
}

export default App;
