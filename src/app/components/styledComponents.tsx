import styled from "styled-components";

// Styling for the individual hand button
export const HandButton = styled.button<{ isPlayer: boolean }>`
  width: 100px;
  height: 100px;
  margin: 10px;
  background-color: ${(props) => (props.isPlayer ? "lightblue" : "lightcoral")};
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.isPlayer ? "#a0d8ef" : "#f88379"};
  }
`;

// Styling for the entire game container
export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

// Styling for the hands container
export const HandsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 20px;
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
  width: 300px;
  height: 200px;
  background-color: white;
  border: 3px solid black;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const PopupContainer = styled.div`
  text-align: center;
  background-color: white;
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px auto;
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;


export const PopupHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const PopupParagraph = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const PopupButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;
export const GameTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
`;

export const GameDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
`;


export const ExplanationButton = styled.button`
  font-size: 1rem;
  margin-left: 10px;
  padding: 5px 10px;
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
  font-size: 1rem;
  color: #444;
  margin-top: 10px;
  text-align: center;
  max-width: 600px;
`;
