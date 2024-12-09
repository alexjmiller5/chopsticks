/*
  File: AnimatedButton.tsx
  Description: A reusable animated button component with a rotating gradient animation effect.
               This button is styled using MUI's Button component and @emotion/styled for custom animations.

  Responsible: Shangwei Liu
*/

import { Button } from "@mui/material";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

// Define a rotating gradient animation using @emotion's keyframes.
// The animation creates a rotating gradient effect on the button's background.
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

// Styled MUI Button with the new gradient animation applied
const AnimatedButtonStyle = styled(Button)`
  background: linear-gradient(-45deg, #ff9a9e, #fad0c4, #fbc2eb, #a1c4fd); /* Gradient colors */
  background-size: 400% 400%;          /* Expand background size for gradient animation */
  animation: ${rotateGradient} 3s infinite; /* Apply the gradient rotation animation */
  margin-top: 20px;                    /* Add spacing on top for alignment */
  color: white;                        /* White text color for contrast */
  font-weight: bold;                   /* Make the button text bold */
  border: none;                        /* Remove default button border */
  border-radius: 8px;                  /* Add rounded corners */
  padding: 12px 24px;                  /* Adjust padding for a larger button */

  &:hover {
    background: linear-gradient(-45deg, #a1c4fd, #c2e9fb, #ff9a9e, #fbc2eb); /* Slightly different gradient on hover */
    filter: brightness(1.2);           /* Brighten the button slightly on hover */
    cursor: pointer;                   /* Change cursor to pointer on hover */
  }
`;

/*
  Component: AnimatedButton
  Purpose: Renders a button with a rotating gradient animation effect.
           It is reusable and accepts two props: a click handler and a button label.

  Props:
    - onClick: Function to handle button clicks.
    - label: Text to be displayed on the button.

  Returns:
    A styled and animated MUI Button component with a gradient animation.
*/
export default function AnimatedButton({
  onClick,
  label,
}: {
  onClick: () => void; // Function to handle the button click event
  label: string;       // Text displayed on the button
}) {
  return (
    <AnimatedButtonStyle
      variant="contained" /* Use MUI's contained style for button behavior */
      onClick={onClick}   /* Attach the onClick event handler */
    >
      {label}             {/* Render the text passed as the label */}
    </AnimatedButtonStyle>
  );
}

