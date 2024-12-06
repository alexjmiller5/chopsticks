
import {PopupContainer, PopupHeader, PopupParagraph, PopupButton,} from "./styledComponents";
  
  export default function YouLose(props: { onPlayAgain: () => void }) {
    return (
      <PopupContainer>
        <PopupHeader>You Lose!</PopupHeader>
        <PopupParagraph>Better luck next time!</PopupParagraph>
        <PopupButton onClick={props.onPlayAgain}>Play Again</PopupButton>
      </PopupContainer>
    );
  }
  