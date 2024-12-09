/*
  File: Hand.tsx
  Description: This file defines reusable styled components for the Chopsticks game using styled-components.
               It includes styling for buttons, containers, popups, titles, and other UI elements.
               These components ensure consistent and responsive styling across the application.

  Responsible: Alex Miller
*/

import Image from 'next/image';
import { HandButtonStyled, HandImageContainer } from './styledComponents';

export default function Hand({ 
  player, 
  hand, 
  onClick, 
  currentHand,
  fingers 
}: { 
  player: string; 
  hand: string; 
  onClick: () => void;
  currentHand: string;
  fingers: number;
}) {
  const isCurrentHand = player === "you" && hand === currentHand;
  const direction = player === "you" ? "up" : "down";
  const isDeadHand = fingers === 0;

  if (isCurrentHand && !isDeadHand) {
    return null;
  }

  return (
    <HandButtonStyled 
      onClick={onClick}
      style={{ cursor: isDeadHand ? 'not-allowed' : 'inherit' }}
    >
      <HandImageContainer>
        <Image
          src={`/hands/${hand}-${direction}-${fingers}.png`}
          alt={`${player}'s ${hand} hand with ${fingers} fingers`}
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </HandImageContainer>
    </HandButtonStyled>
  );
}

