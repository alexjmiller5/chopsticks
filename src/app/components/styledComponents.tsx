import styled from "styled-components";

export const HandButtonStyled = styled.button`
  width: 20vw;
  height: 10vh;
  margin: 2vw;
  background-color: transparent;
  cursor: inherit;
  border: none;
  padding: 0;
  position: relative;
`;

export const HandImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const GameContainer = styled.div<CursorContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
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

// Popup styling for win/lose screens
export const Popup = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: 40vh;
  background-color: white;
  border: 3px solid black;
  border-radius: 10px;
  padding: 4vh;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const PopupContainer = styled.div`
  text-align: center;
  background-color: white;
  border: 1px solid #ccc;
  padding: 4vh;
  margin: 4vh auto;
  width: 80vw;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;


export const PopupHeader = styled.h1`
  font-size: 2rem;
  margin-bottom: 2vh;
`;

export const PopupParagraph = styled.p`
  font-size: 1.5rem;
  margin-bottom: 4vh;
`;

export const PopupButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 2vh 3vw;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    background-color: #0056b3;
  }
`;
export const GameTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  margin: 2vh
`;

export const GameDescription = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2vh;
`;


export const ExplanationButton = styled.button`
  font-size: 1.2rem;
  margin-left: 2vw;
  padding: 1vh 2vw;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ExplanationText = styled.p`
  font-size: 1.2rem;
  color: #444;
  margin-top: 2vh;
  text-align: center;
  max-width: 600px;
`;
