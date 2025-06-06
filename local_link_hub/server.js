const express = require("express");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Serve static files from build (production) or public (development)
const staticDir = path.join(__dirname, "build");
app.use(express.static(staticDir));

// API route for skill recommender (SECURE! Key is NOT exposed to frontend)
app.post("/api/skillRecommender", async (req, res) => {
  // Get OpenAI API key from environment vars
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (!OPENAI_API_KEY) {
    res.status(500).json({ error: 'Missing OpenAI API key on server' });
    return;
  }

  const { userSkills, interestAreas } = req.body || {};

  if (!userSkills && !interestAreas) {
    res.status(400).json({ error: 'userSkills or interestAreas must be provided' });
    return;
  }

  const prompt = `Given the following skills: ${userSkills || "(none)"}, and interest areas: ${interestAreas || "(none)"}, recommend 3 specific community-helpful skills to learn that would make a difference in local micro-neighborhood groups. Respond in a comma-separated list, very concise, no explanations.`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 100,
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data?.error?.message || "OpenAI API error");
    }

    // Parse and return only the suggestion list
    const aiText = data.choices?.[0]?.message?.content?.trim() || "";
    const skills = aiText
      .split(",")
      .map((s) => s.trim())
      .filter((s) => !!s);

    res.status(200).json({ skills });
  } catch (err) {
    res.status(500).json({ error: err.message || "Unknown error" });
  }
});

// PUBLIC_INTERFACE
// Simple test GET endpoint for diagnostic/proxy check
app.get("/api/skillRecommender/test", (req, res) => {
  res.status(200).json({ msg: "SkillRecommender test route success", time: new Date().toISOString() });
});

// All remaining requests return React's index.html (SPA support for frontend routing)
app.get("*", (req, res) => {
  res.sendFile(path.join(staticDir, "index.html"));
});

app.listen(PORT, () => {
  console.log(`SkillRecommender backend listening on port ${PORT}`);
});
