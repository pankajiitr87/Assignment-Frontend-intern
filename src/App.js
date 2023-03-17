import React from "react";
import './App.css'
function App() {
  
  const handleBoldClick = () => {
    document.execCommand("bold", false, null);
  };

  const handleItalicClick = () => {
    document.execCommand("italic", false, null);
  };

  return (
    <div className="div">
      <div className="editor_button">
        <button className="btn btn-light" onClick={handleBoldClick}>B</button>
        <button className="btn btn-light" onClick={handleItalicClick}>I</button>
      </div>
      <div contentEditable={true} className="editor"> 
        <p>Hey,What are you doing..!</p>
      </div>
    </div>
  );
}

export default App;
