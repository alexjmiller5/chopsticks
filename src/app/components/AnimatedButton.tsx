/*
  File: AnimatedButton.tsx
  Description: A reusable animated button component with a pulsing animation effect.
               This button is styled using MUI's Button component and @emotion/styled for custom animations.

  Responsible: Shangwei Liu
*/

import { Button } from "@mui/material";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

// Define the pulsing animation using @emotion's keyframes.
// The animation scales the button size and changes its background color to attract attention.
const pulse = keyframes`
  0% {
    transform: scale(1);             /* Start with normal size */
    background-color: #1976d2;       /* Default blue color */
  }
  50% {
    transform: scale(1.1);           /* Slightly enlarge the button */
    background-color: #1565c0;       /* Darker blue in the middle of the animation */
  }
  100% {
    transform: scale(1);             /* Return to original size */
    background-color: #1976d2;       /* Reset back to original color */
  }
`;

// Styled MUI Button with a pulsing animation applied
const AnimatedButtonStyle = styled(Button)`
  animation: ${pulse} 1.5s infinite; /* Apply the pulse animation infinitely with a 1.5-second duration */
  margin-top: 20px;                  /* Add spacing on top for better visual alignment */
`;

/*
  Component: AnimatedButton
  Purpose: This component renders a button with a pulsing animation.
           It is reusable and accepts two props: a click handler and a button label.

  Props:
    - onClick: Function to handle button clicks.
    - label: Text to be displayed on the button.

  Returns:
    A styled and animated MUI Button component.
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
      variant="contained"            /* Use MUI's "contained" button style for an elevated look */
      sx={{
        /* Default button background color */
        bgcolor: "yellow",
        /* Text color for better contrast */           
        color: "black",             
        "&:hover": {
          /* Change background color to red when hovered */
          bgcolor: "red",            
        },
      }}
       /* Trigger the passed click handler function */
      onClick={onClick}             
    >
      {label}
      {/* Display the text passed as the "label" prop */}                        
    </AnimatedButtonStyle>
  );
}

