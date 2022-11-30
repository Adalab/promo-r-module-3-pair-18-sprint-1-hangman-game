// Fichero src/components/App.js
import '../styles/App.scss';
import { useEffect, useState } from 'react';
import getWords from '../../src/services/api';
import Header from './Hader';
import Dummy from './Dummy';
// import React from 'react';

function App() {
  const [numbeOfrErrors, setNumber] = useState(0);
  const [lastLetter, setlastLetter] = useState('');
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);

  useEffect(() => {
    getWords().then((data) => {
      setWord(data.word);
      console.log(data.word);
    });
  }, []);
  // const handleClick = () => {
  //   setNumber(numbeOfrErrors + 1);
  // };
  const handleClickLetter = (event) => {
    const wordLetters = word.split('');
    let re = /^[a-zA-ZñÑá-úÁ-Ú´]$/;
    if (re.test(event.target.value) || event.target.value === '') {
      setlastLetter(event.target.value);
      if (event.target.value !== '') {
        setUserLetters([...userLetters, event.target.value]);
        userLetters.map((eachLetter, index) => {
          if (wordLetters.includes(eachLetter)) {
            // x
          } else {
            setNumber(numbeOfrErrors + 1);
            // aqui lo dificil. primer if le digo que si la letra que mete la usuaria
            // cumple requisitos o si esta vacia, y si los cumple me la quedo
            //con esa letra que me he quedado valoro si es diferente a nada y si lo cumple la meto en
            // userlleter. Y ademas de meterla en userleter, le hago un mapeo a userleter
            // y le pregunto que si la letrita que mete la usuaria
            // esta por cada letrita de worsleter( palabra traida por fetch)
            // esta incluida . Si SI esta incluida no hago nada por que ya lo estoy haciendo en otra funcion
            //y si no esta incluida meto la funcion que teniamos desde el principio para añadir el error. y que lo pinte
          }
        });
      }
    }
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
      } else {
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
        <Header />
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
          {/* <button onClick={handleClick}>Incrementar</button> */}
        </section>

        <section>
          <Dummy />
        </section>
      </main>
    </div>
  );
}

export default App;
