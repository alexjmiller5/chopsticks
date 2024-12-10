/*
  File: YouLose.tsx
  Description: This component renders a "Tie" popup screen when the player didnt finish the game.
               It includes a message, a Play Again button (animated), and is styled using reusable styled components.

  Responsible: Ruyue Xiao
*/
import {Popup, PopupHeader, PopupParagraph, PopupButton,} from "./styledComponents";
import AnimatedButton from "./AnimatedButton";

export default function YouTie(props: { onPlayAgain: () => void }) {
  return (
    <Popup>
      <PopupHeader>It's a Tie!</PopupHeader>
      <PopupParagraph>Time's up! Neither player won within the turn limit.</PopupParagraph>
      <AnimatedButton onClick={props.onPlayAgain} label="Play Again" />
    </Popup>
  );
}