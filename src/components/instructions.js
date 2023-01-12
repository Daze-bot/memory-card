import React, { useState }from "react";

const Instructions = () => {
  const [visible, setVisible] = useState(true);

  const removeInstructions = () => {
    setVisible((prev) => !prev);
  }

  return (
    <div>
      {visible && (<div
        className="instructions"
        style={{
          top: '0',
          position: 'fixed',
          zIndex: '500',
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          color: 'white',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20vh',
        }}
      >
        These are the instructions to the game.
        <button 
          className="startGame" 
          onClick={removeInstructions}
        >Let's Play!</button>
      </div>)}
    </div>
  );
}

export default Instructions;