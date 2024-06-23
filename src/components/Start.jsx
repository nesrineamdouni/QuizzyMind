import { useRef } from "react";
import "./start.css";

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    if (inputRef.current.value) {
      setUsername(inputRef.current.value);
    }
  };

  return (
    <div className="start-container">
      <h1 className="start-title">Welcome to QuizzyMind !</h1>
      <p className="start-description">
        Please enter your name to get started.
      </p>
      <div className="start-input-container">
        <input
          className="start-input"
          placeholder="Enter your name"
          ref={inputRef}
        />
        <button className="start-button" onClick={handleClick}>
          Start
        </button>
      </div>
    </div>
  );
}
