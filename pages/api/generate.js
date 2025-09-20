// pages/api/generate.js
export default function handler(req, res) {
  if (req.method === "POST") {
    // simple random key (stateless)
    const newKey = Math.random().toString(36).substring(2, 12);

    // directly response bhej do
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