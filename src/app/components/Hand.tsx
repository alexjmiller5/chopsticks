// this is just a dummy hand component created for testing other components; will be replaced later with the actual one
export default function Hand({ player, hand, onClick }: { player: string; hand: string; onClick: () => void }) {
    return (
      <button
        onClick={onClick}
        style={{
          width: "100px",
          height: "100px",
          margin: "10px",
          backgroundColor: player === "you" ? "lightblue" : "lightcoral",
          border: "1px solid black",
          borderRadius: "8px",
        }}
      >
        {player} - {hand}
      </button>
    );
  }
  
