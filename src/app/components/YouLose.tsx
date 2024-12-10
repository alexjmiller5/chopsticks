/*
  File: YouLose.tsx
  Description: This component renders a "You Lose" popup screen when the player loses the game.
               It includes a message, a Play Again button (animated), and is styled using reusable styled components.

  Responsible: Ruyue Xiao
*/
import {Popup, PopupHeader, PopupParagraph, PopupButton,} from "./styledComponents";
import AnimatedButton from "./AnimatedButton";

export default function YouLose(props: { onPlayAgain: () => void }) {
  return (
    <Popup>
      <PopupHeader>You Lose!</PopupHeader>
      <PopupParagraph>Better luck next time!</PopupParagraph>
      <AnimatedButton onClick={props.onPlayAgain} label="Play Again" />
    </Popup>
  );
}