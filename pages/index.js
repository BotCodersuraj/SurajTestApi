import { useState } from "react";

export default function Home() {
  const [apiKey, setApiKey] = useState("");
  const [limit, setLimit] = useState(null);
  const [uid, setUid] = useState("");
  const [result, setResult] = useState("");

  const generateKey = async () => {
    const res = await fetch("/api/generate", { method: "POST" });
    const data = await res.json();
    if (data.success) {
      setApiKey(data.apiKey);
      setLimit(data.limit);
    }
  };

  const useKey = async () => {
    if (!uid || !apiKey) return alert("UID aur API key chahiye");
    const res = await fetch(`/api/use?uid=${uid}&key=${apiKey}`);
    const data = await res.json();
    if (data.success || data.status === "ok") {
      setResult(JSON.stringify(data, null, 2));
      setLimit(data.remaining);
    } else {
      setResult(data.message);
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>API Key Generator</h1>
      <button onClick={generateKey}>Generate API Key</button>

      {apiKey && (
        <div style={{ marginTop: 20 }}>
          <p><strong>API Key:</strong> {apiKey}</p>
          <p><strong>Remaining Limit:</strong> {limit}</p>
          <input
            type="text"
            placeholder="Enter UID"
            value={uid}
            onChange={(e) => setUid(e.target.value)}
          />
          <button onClick={useKey} style={{ marginLeft: 10 }}>Use Key</button>
        </div>
      )}

      {result && (
        <pre style={{ marginTop: 20, background: "#eee", padding: 10 }}>
          {result}
        </pre>
      )}
    </div>
  );
}