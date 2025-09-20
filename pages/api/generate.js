// pages/api/generate.js
let apikeys = {}; // memory only, Vercel-safe

export default function handler(req, res) {
  if (req.method === "POST") {
    // simple random key
    const newKey = Math.random().toString(36).substring(2, 12);
    apikeys[newKey] = { limit: 50 };

    res.status(200).json({
      success: true,
      apiKey: newKey,
      limit: 50,
      credits: "t.me/zorvaxo",
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}