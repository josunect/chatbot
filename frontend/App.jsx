// src/App.jsx
import { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <input value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Ask me anything..." />
        <button type="submit">end</button>
      </form>
      <p>Response: {response}</p>
    </div>
  );
}

export default App;

