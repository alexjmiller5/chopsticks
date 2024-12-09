"use client";

import { useState, useEffect } from "react";
import YouWin from "./components/YouWin";
import YouLose from "./components/YouLose";
import Hand from "./components/Hand";
import {GameContainer, HandsContainer, GameTitle, GameDescription, ExplanationButton, ExplanationText} from "./components/styledComponents";

export default function GamePage() {
  const [gameState, setGameState] = useState<"playing" | "win" | "lose">(
    "playing"
  );
  const [showExplanation, setShowExplanation] = useState(false);
  const [currentHand, setCurrentHand] = useState<"left" | "right">("left");
  const [isYourTurn, setIsYourTurn] = useState(true);

  const [opponentFingers, setOpponentFingers] = useState({
    left: 1,
    right: 1,
  });
  const [yourFingers, setYourFingers] = useState({
    left: 1,
    right: 1,
  });

  const resetGame = () => {
    setGameState("playing");
    setIsYourTurn(true);
    setCurrentHand("left");
    setOpponentFingers({ left: 1, right: 1 });
    setYourFingers({ left: 1, right: 1 });
  };

  function toggleExplanation() {
    setShowExplanation((prev) => !prev);
  }

  const updateFingers = (targetPlayer: "opponent" | "you", targetHand: "left" | "right", attackingFingers: number) => {
    const setFingers = targetPlayer === "opponent" ? setOpponentFingers : setYourFingers;
    setFingers(prev => ({
      ...prev,
      [targetHand]: (prev[targetHand] + attackingFingers) % 5
    }));
  };

  const handlePlayerAttack = (targetHand: "left" | "right") => {
    if (!isYourTurn) return;
    if (opponentFingers[targetHand] === 0) return;
    const attackingFingers = yourFingers[currentHand];
    updateFingers("opponent", targetHand, attackingFingers);
    setIsYourTurn(false);
  };

  const makeOpponentMove = () => {
    // Choose attacking hand that isn't dead
    const validAttackingHands = Object.entries(opponentFingers)
      .filter(([_, fingers]) => fingers !== 0)
      .map(([hand]) => hand as "left" | "right");
    
    const attackingHand = validAttackingHands[Math.floor(Math.random() * validAttackingHands.length)];

    // Choose target hand that isn't dead
    const validTargetHands = Object.entries(yourFingers)
      .filter(([_, fingers]) => fingers !== 0)
      .map(([hand]) => hand as "left" | "right");
    
    const targetHand = validTargetHands[Math.floor(Math.random() * validTargetHands.length)];

    const attackingFingers = opponentFingers[attackingHand];
    
    updateFingers("you", targetHand, attackingFingers);
    setIsYourTurn(true);
  };

  useEffect(() => {
    if (!isYourTurn && gameState === "playing") {
      const timer = setTimeout(makeOpponentMove, 2000);
      return () => clearTimeout(timer);
    }
  }, [isYourTurn, gameState]);

  useEffect(() => {
    if (opponentFingers.left === 0 && opponentFingers.right === 0) {
      setGameState("win");
    } else if (yourFingers.left === 0 && yourFingers.right === 0) {
      setGameState("lose");
    }
  }, [opponentFingers, yourFingers]);

  useEffect(() => {
    // Only check when it becomes your turn after opponent's move
    if (isYourTurn && gameState === "playing") {
      // If current hand is dead
      if (yourFingers[currentHand] === 0) {
        // Switch to other hand if it's alive
        const otherHand = currentHand === "left" ? "right" : "left";
        if (yourFingers[otherHand] !== 0) {
          setCurrentHand(otherHand);
        }
      }
    }
  }, [isYourTurn, yourFingers, currentHand, gameState]);

  return (
    <GameContainer
    $currentHand={currentHand}
    $yourFingers={yourFingers}
    >
      {gameState === "playing" && (
        <>
          <GameTitle>Chopsticks Game</GameTitle>
          <GameDescription>
            {isYourTurn ? "Your turn! Click on the hands to make your moves!" : "Opponent's turn... "}
            <ExplanationButton onClick={toggleExplanation}>
              {showExplanation ? "Hide Explanation" : "How to Play"}
            </ExplanationButton>
          </GameDescription>
          {showExplanation && (
            <ExplanationText>
              Chopsticks is a simple game where players use their hands to attack their opponent&apos;s hands. Click on your hands to switch which hand you attack with and click opponent&apos;s hands to attack them. The first to get both opponent&apos;s hand to exactly 5 fingers wins!
            </ExplanationText>
          )}
          <HandsContainer>
            <div>
              <Hand
                player="opponent"
                hand="right"
                onClick={() => handlePlayerAttack("right")}
                currentHand={currentHand}
                fingers={opponentFingers.right}
              />
              <Hand
                player="opponent"
                hand="left"
                onClick={() => handlePlayerAttack("left")}
                currentHand={currentHand}
                fingers={opponentFingers.left}
              />
            </div>
            <div>
              <Hand
                player="you"
                hand="left"
                onClick={() => yourFingers.left !== 0 && setCurrentHand("left")}
                currentHand={currentHand}
                fingers={yourFingers.left}
              />
              <Hand
                player="you"
                hand="right"
                onClick={() => yourFingers.right !== 0 && setCurrentHand("right")}
                currentHand={currentHand}
                fingers={yourFingers.right}
              />
            </div>
          </HandsContainer>
        </>
      )}
      {gameState === "win" && <YouWin onPlayAgain={resetGame} />}
      {gameState === "lose" && <YouLose onPlayAgain={resetGame} />}
    </GameContainer>
  );
}

