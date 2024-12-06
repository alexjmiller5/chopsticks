import {PopupContainer, PopupHeader, PopupParagraph, PopupButton,} from "./styledComponents";

  export default function YouWin(props: { onPlayAgain: () => void }) {
    return (
      <PopupContainer>
        <PopupHeader>Congratulations, You Win!</PopupHeader>
        <PopupParagraph>Great job!</PopupParagraph>
        <PopupButton onClick={props.onPlayAgain}>Play Again</PopupButton>
      </PopupContainer>
    );
  }
  