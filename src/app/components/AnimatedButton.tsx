/*
  File: AnimatedButton.tsx
  Description: A reusable animated button component with a rotating gradient animation effect.
               Ensures consistent font styles with other UI buttons.

  Responsible: Shangwei Liu
*/

import { Button } from "@mui/material";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

// Define a rotating gradient animation using @emotion's keyframes
const rotateGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Styled MUI Button with consistent font and animation
const AnimatedButtonStyle = styled(Button)`
  background: linear-gradient(-45deg, #ff9a9e, #fad0c4, #fbc2eb, #a1c4fd);
  background-size: 400% 400%;
  animation: ${rotateGradient} 3s infinite;

  margin-top: 20px;
  color: white;
  font-size: 1.2rem;
  font-family: "Arial", sans-serif;
  font-weight: bold;
  text-transform: none;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;

  &:hover {
    background: linear-gradient(-45deg, #a1c4fd, #c2e9fb, #ff9a9e, #fbc2eb);
    filter: brightness(1.2);
    /* cursor: pointer; */
  }
`;

/*
  Component: AnimatedButton
  Purpose: Renders a button with a rotating gradient animation effect while maintaining consistent fonts.

  Props:
    - onClick: Function to handle button clicks.
    - label: Text to be displayed on the button.
*/
export default function AnimatedButton({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) {
  return (
    <AnimatedButtonStyle
      variant="contained"
      onClick={onClick}
    >
      {label}
    </AnimatedButtonStyle>
  );
}
