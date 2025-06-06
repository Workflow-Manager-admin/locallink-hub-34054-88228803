/**
 * SkillRecommenderUI.js
 *
 * UI component providing a form for AI-powered skill recommendations.
 * Uses the SkillRecommenderContext for backend integration.
 */

import React, { useState } from "react";
import { useSkillRecommender } from "./SkillRecommenderContext";

// PUBLIC_INTERFACE
function SkillRecommenderUI() {
  const [userSkills, setUserSkills] = useState("");
  const [interestAreas, setInterestAreas] = useState("");
  const { loading, suggestedSkills, recommendSkills, error } = useSkillRecommender();

  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    await recommendSkills({ userSkills, interestAreas });
  }

  return (
    <section style={{
      maxWidth: 450,
      background: "#191922",
      margin: "32px auto",
      borderRadius: 12,
      boxShadow: "0 2px 14px rgba(0,0,0,0.11)",
      padding: 28,
      color: "#ece998"
    }}>
      <h2 style={{ marginTop: 0, color: "#FFB300" }}>AI Skill Recommender 🤖</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: 14 }}>
        <label>
          Your skills:
          <input
            type="text"
            value={userSkills}
            onChange={(e) => setUserSkills(e.target.value)}
            placeholder="e.g., carpentry, event planning"
            style={{
              display: "block",
              width: "100%",
              margin: "5px 0 15px",
              borderRadius: 4,
              padding: "8px 10px",
              border: "1px solid #444",
              background: "#181820",
              color: "#ece998"
            }}
          />
        </label>
        <label>
          Interest areas:
          <input
            type="text"
            value={interestAreas}
            onChange={(e) => setInterestAreas(e.target.value)}
            placeholder="e.g., community gardens"
            style={{
              display: "block",
              width: "100%",
              margin: "5px 0 18px",
              borderRadius: 4,
              padding: "8px 10px",
              border: "1px solid #444",
              background: "#181820",
              color: "#ece998"
            }}
          />
        </label>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Thinking..." : "Get AI Suggestions"}
        </button>
      </form>
      {submitted && (
        <>
          {error && <div style={{ color: "#ff6363", marginBottom: 11 }}>{error}</div>}
          {!loading && suggestedSkills.length > 0 && (
            <div style={{
              padding: "10px",
              background: "#222328",
              borderRadius: 6,
              border: "1px solid #222",
              color: "#fff"
            }}>
              <div style={{ marginBottom: 5, fontWeight: 600 }}>Suggested Skills:</div>
              <ul style={{ paddingLeft: 22, margin: 0 }}>
                {suggestedSkills.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
      <div style={{ marginTop: 14, fontSize: "0.93em", color: "#b7b7a2" }}>
        Tip: The AI will recommend helpful skills to boost your local impact.
      </div>
    </section>
  );
}

export default SkillRecommenderUI;
