/**
 * SkillRecommenderContext.js
 * 
 * Provides context and React hook to fetch AI skill recommendations via
 * the backend API route, keeping keys safe. Used for AI skill suggestions.
 */

import React, { createContext, useContext, useState } from "react";

// PUBLIC_INTERFACE
const SkillRecommenderContext = createContext();

// PUBLIC_INTERFACE
export function SkillRecommenderProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [suggestedSkills, setSuggestedSkills] = useState([]);
  const [error, setError] = useState(null);

  // PUBLIC_INTERFACE
  async function recommendSkills({ userSkills, interestAreas }) {
    setLoading(true);
    setError(null);
    try {
      const resp = await fetch("/api/skillRecommender", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userSkills, interestAreas }),
      });

      const data = await resp.json();
      if (!resp.ok) {
        throw new Error(data.error || "Unknown error");
      }
      setSuggestedSkills(data.skills);
      return data.skills;
    } catch (e) {
      setError(e.message);
      setSuggestedSkills([]);
      return [];
    } finally {
      setLoading(false);
    }
  }

  return (
    <SkillRecommenderContext.Provider
      value={{
        loading,
        suggestedSkills,
        error,
        recommendSkills,
      }}
    >
      {children}
    </SkillRecommenderContext.Provider>
  );
}

// PUBLIC_INTERFACE
export function useSkillRecommender() {
  return useContext(SkillRecommenderContext);
}
