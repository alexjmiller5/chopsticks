"use client";

import { useState } from "react";
import YouWin from "./components/YouWin";
import YouLose from "./components/YouLose";
import Hand from "./components/Hand";
import {GameContainer,HandsContainer, GameTitle, GameDescription, ExplanationButton, ExplanationText,} from "./components/styledComponents";

export default function GamePage() {
  const [gameState, setGameState] = useState<"playing" | "win" | "lose">(
    "playing"
  );
  const [showExplanation, setShowExplanation] = useState(false);

  function handleWin() {
    setGameState("win");
  }

  function handleLose() {
    setGameState("lose");
  }

  function handlePlayAgain() {
    setGameState("playing");
  }

  function toggleExplanation() {
    setShowExplanation((prev) => !prev);
  }

  return (
    <GameContainer>
      {gameState === "playing" && (
        <>
          <GameTitle>Chopsticks Game</GameTitle>
          <GameDescription>
            Click on the hands to make your moves!{" "}
            <ExplanationButton onClick={toggleExplanation}>
              {showExplanation ? "Hide Explanation" : "How to Play"}
            </ExplanationButton>
          </GameDescription>
          {showExplanation && (
            <ExplanationText>
              Chopsticks is a simple game where players use their hands to
              attack or split. Click on your hands to split fingers or on your
              opponent's hands to add your fingers to theirs. The first to get
              an opponent's hand to exactly 5 fingers wins!
            </ExplanationText>
          )}
          <HandsContainer>
            <Hand
              player="you"
              hand="left"
              onClick={() => console.log("Your left hand clicked")}
            />
            <Hand
              player="you"
              hand="right"
              onClick={() => console.log("Your right hand clicked")}
            />
            <Hand
              player="opponent"
              hand="left"
              onClick={handleWin} // Triggers win
            />
            <Hand
              player="opponent"
              hand="right"
              onClick={handleLose} // Triggers lose
            />
          </HandsContainer>
        </>
      )}

      {gameState === "win" && <YouWin onPlayAgain={handlePlayAgain} />}
      {gameState === "lose" && <YouLose onPlayAgain={handlePlayAgain} />}
    </GameContainer>
  );
}

