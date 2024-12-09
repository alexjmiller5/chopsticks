/*
File: page.tsx
Description: This is the main page of the Chopsticks game. It manages the game state, player moves, and game logic,
including win/lose/tie conditions, AI opponent behavior, and dynamic UI updates.

Features:
- Manages player and opponent hands with finger counts.
- Handles turn-based gameplay.
- Updates UI dynamically based on game state.
- Includes a "How to Play" explanation.
- Displays "You Win," "You Lose," and "It's a Tie" screens when the game ends.
- Displays the current turn count during gameplay.

Responsible: Shangwei Liu, Alex Miller
*/

"use client";

import { useState, useEffect } from "react";
import YouWin from "@/app/components/YouWin";
import YouLose from "@/app/components/YouLose";
import YouTie from "@/app/components/YouTie"; 
import Hand from "@/app/components/Hand";
import {GameContainer, HandsContainer, GameTitle, GameDescription, ExplanationButton, ExplanationText, TurnCounter} from "./components/styledComponents";
import React from 'react';

export default function GamePage() {
  // The current state of the game can be "playing", "win", "lose", or "tie"
  const [gameState, setGameState] = useState<"playing" | "win" | "lose" | "tie">("playing");

  // Toggles the display of the "How to Play" explanation panel
  const [showExplanation, setShowExplanation] = useState(false);

  // Tracks which of the player's hands is currently selected as the "attacking" hand
  const [currentHand, setCurrentHand] = useState<"left" | "right">("left");

  // Indicates whether it is currently the player's turn
  const [isYourTurn, setIsYourTurn] = useState(true);

  // Counts the total number of turns taken (both players combined)
  const [turnCount, setTurnCount] = useState(0);

  // Limit of turns before the game ends in a tie
  const TURN_LIMIT = 30; 

  // Opponent's fingers state for left and right hands
  const [opponentFingers, setOpponentFingers] = useState({
    left: 1,
    right: 1,
  });

  // Player's fingers state for left and right hands
  const [yourFingers, setYourFingers] = useState({
    left: 1,
    right: 1,
  });

  // Resets the entire game state to start anew
  const resetGame = () => {
    setGameState("playing");
    setIsYourTurn(true);
    setCurrentHand("left");
    setOpponentFingers({ left: 1, right: 1 });
    setYourFingers({ left: 1, right: 1 });
    setTurnCount(0); 
  };

  // Toggles the visibility of the "How to Play" explanation text
  function toggleExplanation() {
    setShowExplanation((prev) => !prev);
  }

  // Updates the fingers of a target hand based on the attacking fingers count,
  // modulo 5 to determine if the hand becomes "dead" (0 fingers)
  const updateFingers = (
    targetPlayer: "opponent" | "you",
    targetHand: "left" | "right",
    attackingFingers: number
  ) => {
    const setFingers = targetPlayer === "opponent" ? setOpponentFingers : setYourFingers;
    setFingers((prev) => ({
      ...prev,
      [targetHand]: (prev[targetHand] + attackingFingers) % 5,
    }));
  };

  // Handles the player's attack action when they click on an opponent's hand
  const handlePlayerAttack = (targetHand: "left" | "right") => {
    if (!isYourTurn) return;              // Only allow attacks on player's turn
    if (opponentFingers[targetHand] === 0) return; // Can't attack a dead hand

    const attackingFingers = yourFingers[currentHand];
    updateFingers("opponent", targetHand, attackingFingers);
    setIsYourTurn(false);   // End the player's turn
    setTurnCount((prev) => prev + 1); // Increment turn counter
  };

  // AI logic for the opponent's move:
  // Randomly selects an attacking hand and a target hand from the available (non-dead) hands
  const makeOpponentMove = () => {
    const validAttackingHands = Object.entries(opponentFingers)
      .filter(([_, fingers]) => fingers !== 0)
      .map(([hand]) => hand as "left" | "right");
    const attackingHand =
      validAttackingHands[Math.floor(Math.random() * validAttackingHands.length)];

    const validTargetHands = Object.entries(yourFingers)
      .filter(([_, fingers]) => fingers !== 0)
      .map(([hand]) => hand as "left" | "right");
    const targetHand =
      validTargetHands[Math.floor(Math.random() * validTargetHands.length)];

    const attackingFingers = opponentFingers[attackingHand];
    updateFingers("you", targetHand, attackingFingers);
    setIsYourTurn(true);   // Return turn to the player
    setTurnCount((prev) => prev + 1); // Increment turn counter
  };

  // When it's the opponent's turn (isYourTurn = false), initiate opponent's move after a short delay
  useEffect(() => {
    if (!isYourTurn && gameState === "playing") {
      const timer = setTimeout(makeOpponentMove, 2000);
      return () => clearTimeout(timer);
    }
  }, [isYourTurn, gameState]);

  // Check for win/lose/tie conditions whenever hands or turn count change
  useEffect(() => {
    // Player wins if opponent's both hands are dead (0 fingers)
    if (opponentFingers.left === 0 && opponentFingers.right === 0) {
      setGameState("win");
    } 
    // Player loses if their both hands are dead (0 fingers)
    else if (yourFingers.left === 0 && yourFingers.right === 0) {
      setGameState("lose");
    } 
    // If turn limit is reached without a winner, it's a tie
    else if (turnCount >= TURN_LIMIT) {
      setGameState("tie"); 
    }
  }, [opponentFingers, yourFingers, turnCount]);

  // If it's the player's turn and their current attacking hand is dead (0 fingers),
  // automatically switch to the other hand if available
  useEffect(() => {
    if (isYourTurn && gameState === "playing") {
      if (yourFingers[currentHand] === 0) {
        const otherHand = currentHand === "left" ? "right" : "left";
        if (yourFingers[otherHand] !== 0) {
          setCurrentHand(otherHand);
        }
      }
    }
  }, [isYourTurn, yourFingers, currentHand, gameState]);

  return (
    <GameContainer>
      {gameState === "playing" && (
        <>
          <GameTitle>Chopsticks Game</GameTitle>
          <GameDescription>
            {isYourTurn
              ? "Your turn! Click on the hands to make your moves!"
              : "Opponent's turn... "}
            <ExplanationButton onClick={toggleExplanation}>
              {showExplanation ? "Hide Explanation" : "How to Play"}
            </ExplanationButton>
          </GameDescription>
          {/* Displays the current number of turns taken */}
          <TurnCounter>Current Turn: {turnCount}</TurnCounter>
          {showExplanation && (
            <ExplanationText>
              Chopsticks is a simple game where players use their hands to attack their opponent&apos;s hands. Click on your hands to switch which hand you attack with and click opponent&apos;s hands to attack them. The first to get both opponent&apos;s hands to exactly 5 fingers wins! If no player wins within 30 moves, the game ends in a tie.
            </ExplanationText>
          )}
          {/* Main hands display: top is opponent's hands, bottom is player's hands */}
          <HandsContainer
            $currentHand={currentHand}
            $yourFingers={yourFingers}
          >
            <div>
              {/* Opponent's right hand: Clicking it attacks if it's your turn */}
              <Hand
                player="opponent"
                hand="right"
                onClick={() => handlePlayerAttack("right")}
                currentHand={currentHand}
                fingers={opponentFingers.right}
              />
              {/* Opponent's left hand: Clicking it attacks if it's your turn */}
              <Hand
                player="opponent"
                hand="left"
                onClick={() => handlePlayerAttack("left")}
                currentHand={currentHand}
                fingers={opponentFingers.left}
              />
            </div>
            <div>
              {/* Player's left hand: Clicking switches your active attacking hand if it's not dead */}
              <Hand
                player="you"
                hand="left"
                onClick={() =>
                  yourFingers.left !== 0 && setCurrentHand("left")
                }
                currentHand={currentHand}
                fingers={yourFingers.left}
              />
              {/* Player's right hand: Clicking switches your active attacking hand if it's not dead */}
              <Hand
                player="you"
                hand="right"
                onClick={() =>
                  yourFingers.right !== 0 && setCurrentHand("right")
                }
                currentHand={currentHand}
                fingers={yourFingers.right}
              />
            </div>
          </HandsContainer>
        </>
      )}
      {gameState === "win" && <YouWin onPlayAgain={resetGame} />}{/* Win condition */}
      {gameState === "lose" && <YouLose onPlayAgain={resetGame} />}{/* lose condition */}
      {gameState === "tie" && <YouTie onPlayAgain={resetGame} />} {/* Tie condition */}
    </GameContainer>
  );
}
