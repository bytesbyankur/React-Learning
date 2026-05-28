import { useState } from "react";
import commands from "./data/commands";
import "./App.css";

function App() {

  const [input, setInput] = useState("");

  const [history, setHistory] = useState([
    "Type 'help' to see available commands."
  ]);

  function executeCommand() {

    const cmd = input.trim().toLowerCase();

    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    if (commands[cmd]) {

      setHistory((prevHistory) => [
        ...prevHistory,
        `> ${cmd}`,
        commands[cmd]
      ]);

    } else {

      setHistory((prevHistory) => [
        ...prevHistory,
        `> ${cmd}`,
        "Command not found. Type 'help'"
      ]);

    }

    setInput("");
  }

  return (
    <div className="terminal">

      <div className="output">

        {history.map((line, index) => (
          <pre key={index}>{line}</pre>
        ))}

      </div>

      <div className="input-line">

        <span>{">"}</span>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              executeCommand();
            }
          }}
          autoFocus
        />

      </div>

    </div>
  );
}

export default App;