/**
 * Skill Recommender API Route
 * This handler securely calls the OpenAI API for skill suggestions.
 * Move OPENAI_API_KEY to your environment (e.g., .env.local or process.env on serverless).
 */

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

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
}
