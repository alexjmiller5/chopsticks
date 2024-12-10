/*
  File: YouWin.tsx
  Description: This component displays the "You Win" popup when the player wins the game.
               It uses reusable components like AnimatedButton for the "Play Again" button
               and styled components for consistent design.

  Responsible: Ruyue Xiao
*/

import {PopupContainer, PopupHeader, PopupParagraph} from "./styledComponents";
import AnimatedButton from "./AnimatedButton";

  export default function YouWin(props: { onPlayAgain: () => void }) {
    return (
      <PopupContainer>
        <PopupHeader>Congratulations, You Win!</PopupHeader>
        <PopupParagraph>Great job!</PopupParagraph>
        <AnimatedButton onClick={props.onPlayAgain} label="Play Again" />
      </PopupContainer>
    );
  }
  
