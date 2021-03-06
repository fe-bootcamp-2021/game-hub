import React from "react";
import { useParams } from "react-router-dom";
import Game2048 from "../../components/originalGames/2048_game/2048";
import Interviewer from "../../components/originalGames/interviewer/Interviewer";
import Minesweeper from "../../components/originalGames/minesweeper/minesweeper";
import Roulette from "../../components/originalGames/roulette/Game";
import Sudoku from "../../components/originalGames/sudoku/sudoku";
import TacToe from "../../components/originalGames/TicTacToe/Components/TacToe/TacToe";
import Turtles from "../../components/originalGames/turtlesMemory/Turtles";
import RockPaperScissors from "../../components/originalGames/rockPaperScissors/RockPaperScissors";
import Hangman from "../../components/originalGames/hangman/Hangman";
import ReverContext from "../../components/originalGames/reverso_context/game";
import Game from "../../components/originalGames/Chess/Game";

export default function GamePage() {
  const { type } = useParams();
  console.log(type);
  let game;
  switch (type) {
    case "tic-tac-toe":
      return (game = <TacToe />);
    case "interviewer":
      return (game = <Interviewer />);
    case "sudoku":
      return (game = <Sudoku />);
    case "mines":
      return (game = <Minesweeper />);
    case "turtlesMemory":
      return (game = <Turtles />);
    case "roulette":
      return (game = <Roulette />);
    case "2048":
      return (game = <Game2048 />);
    case "RockPaperScissors":
      return (game = <RockPaperScissors />);
    case "hangman":
      return (game = <Hangman />);
    case "reverso_context":
      return (game = <ReverContext />);
    case "chess":
      return (game = <Game />);
  }
  return <div>{game}</div>;
}
