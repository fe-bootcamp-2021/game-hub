import React, { useState, useEffect } from "react";
import { showNotification as show } from "./helpers/Helpers";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Popup from "./components/Popup";
import Notification from "./components/Notification";
import "./Hangman.css";

const words = [
  "abjad",
  "akhirat",
  "aksesori",
  "aktif",
  "akuarium",
  "aluminium",
  "ambulans",
  "analisis",
  "antena",
  "antre",
  "anugerah",
  "azan",
  "afdal",
  "agamais",
  "ajek",
  "adjektif",
  "aktual",
  "balsam",
  "batalion",
  "baterai",
  "barzakh",
  "bazar",
  "besok",
  "bosan",
  "bus",
  "cabai",
  "capai",
  "cedera",
  "cendekiawan",
  "cengkih",
  "cinderamata",
  "cokelat",
  "daftar",
  "derajat",
  "desain",
  "detail",
  "detergen",
  "diagnosis",
  "efektif",
  "efektivitas",
  "ekosistem",
  "ekspor",
  "ekstra",
  "ekstrem",
  "elite",
];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function Hangman() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <div className="hangmanGame">
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </div>
  );
}

export default Hangman;
