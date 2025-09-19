// File: /pages/api/accinfo.js

export default async function handler(req, res) {
  try {
    const apiUrl = `https://danger-info-alpha.vercel.app/accinfo?uid=8080519000&key=DANGERxINFO`;

    // Dusre API se data fetch
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Apni API me wahi data bhejna
    res.status(200).json({
      success: true,
      from: "danger-info-alpha",
      uid: "8080519000",
      data: data
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching data",
      error: error.message
    });
  }
}