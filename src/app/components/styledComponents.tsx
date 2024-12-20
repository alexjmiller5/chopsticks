/*
  File: styledComponents.tsx
  Description: This file defines reusable styled components for the Chopsticks game using styled-components.
               It includes styling for buttons, containers, popups, titles, and other UI elements.
               These components ensure consistent and responsive styling across the application.

  Responsible: Shangwei Liu, Ruyue Xiao, Alex Miller
*/

import styled from "styled-components";

interface HandButtonProps {
  $isDeadHand?: boolean;
}

// Hand Button
export const HandButtonStyled = styled.button<HandButtonProps>`
  width: 20vw;
  height: 10vh;
  margin: 2vw;
  background-color: transparent;
  border: none;
  padding: 0;
  position: relative;
  /* If the hand is dead, show not-allowed; otherwise rely on the parent's cursor */
  cursor: ${props => (props.$isDeadHand ? 'not-allowed' : 'inherit')};
`;

// Hand Image Container
export const HandImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* cursor: inherit; */
`;

export const GameContainer = styled.div<CursorContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #FCF5E9;
  cursor: ${props => {
    const fingers = props.$yourFingers[props.$currentHand as 'left' | 'right'];
    return `url('/hands/${props.$currentHand}-up-${fingers}.png') 50 50, auto`;
  }};
`;

interface CursorContainerProps {
  $currentHand: string;
  $yourFingers: { left: number; right: number };
}

export const HandsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

// Popup (Win/Lose/Tie Screen)
export const Popup = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: 40vh;
  background: linear-gradient(135deg, #ff9a9e, #fad0c4, #fbc2eb, #a1c4fd);
  background-size: cover;
  background-color: #FCF5E9;
  border: 2px solid #f8e9f8;
  border-radius: 12px;
  padding: 4vh;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

// Popup Header
export const PopupHeader = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2vh;
  color: #007bff;
`;

// Popup Paragraph
export const PopupParagraph = styled.p`
  font-size: 1.5rem;
  margin-bottom: 4vh;
  color: #444;
`;

// Popup Button
export const PopupButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 2vh 3vw;
  border-radius: 4px;
  font-size: 1.2rem;
  font-family: "Arial", sans-serif;
  font-weight: bold;

  &:hover {
    background-color: #0056b3;
  }
`;


// Game Title
export const GameTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #222;
  margin: 2vh;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
`;

// Game Description
export const GameDescription = styled.p`
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 2vh;
  text-align: center;
  max-width: 800px;
`;

// Explanation Button
export const ExplanationButton = styled.button`
  font-size: 1.2rem;
  margin-left: 2vw;
  padding: 1vh 2vw;
  background: linear-gradient(-45deg, #ff9a9e, #fad0c4, #fbc2eb, #a1c4fd);
  background-size: 400% 400%;
  color: white;
  border: none;
  font-family: "Arial", sans-serif;
  font-weight: bold;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: linear-gradient(-45deg, #a1c4fd, #c2e9fb, #ff9a9e, #fbc2eb);
    transform: scale(1.05); /* Slight scaling effect */
    filter: brightness(1.1);
  }
`;


// Explanation Text
export const ExplanationText = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-top: 2vh;
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
`;

// Display the current turn
export const TurnCounter = styled.div`
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  color: #333;
`;