import React, { useState } from "react";
import "./MainContainer.css";

// Dummy data for UI mock
const geoCommunities = [
  { id: 1, name: "Central Park Neighbors", members: 214, isJoined: true },
  { id: 2, name: "Uptown Creators", members: 87, isJoined: false },
  { id: 3, name: "East Market Help", members: 156, isJoined: false },
];

const postsFeed = [
  {
    id: 1,
    user: "Ava",
    verified: true,
    community: "Central Park Neighbors",
    type: "Offer",
    content: "Offering free computer help this Sunday — DM to schedule!",
    time: "2 min ago",
  },
  {
    id: 2,
    user: "Sam",
    verified: false,
    community: "Central Park Neighbors",
    type: "Request",
    content: "Looking for a ladder to borrow for one day.",
    time: "10 min ago",
  },
  {
    id: 3,
    user: "Maria",
    verified: true,
    community: "Central Park Neighbors",
    type: "Crisis Update",
    content: "Lost dog near East Gate! If found, contact Maria.",
    time: "22 min ago",
  },
];

// PUBLIC_INTERFACE
function MainContainer() {
  // Sidebar active tab state
  const [activeTab, setActiveTab] = useState("dashboard");

  // PUBLIC_INTERFACE
  function Sidebar() {
    // Helper: section header for navigation grouping
    function SectionHeader({ icon, text }) {
      return (
        <li style={{
          padding: '9px 24px 7px 24px',
          color: 'var(--llh-accent)',
          fontWeight: 700,
          textTransform: 'uppercase',
          fontSize: '0.93em',
          letterSpacing: '1px',
          opacity: 0.82,
          borderLeft: 'none',
          cursor: 'default',
        }}>
          <span style={{ marginRight: 7 }}>{icon}</span>
          {text}
        </li>
      );
    }

    // Icon map for consistent emoji/ASCII notation
    const icons = {
      map: '📍',
      token: '🪙',
      payitforward: '🔗',
      crisis: '🚨',
      aid: '🆘',
      tracker: '🗂️',
      eco: '🌿',
      incubator: '💡',
      score: '⭐',
      challenge: '🏆',
      stories: '📖',
      polls: '📊',
      library: '📚',
      match: '🤝',
      circles: '👥',
      calendar: '📅',
      forum: '💬',
      mental: '🧠',
      wellness: '💟',
      archive: '🗃️',
      mentorship: '🎓',
      multi: '🌐',
      access: '♿',
      ai: '🤖',
      dashboard: '📈',
      disaster: '🧯',
      grants: '💸',
    };

    return (
      <aside className="sidebar">
        <div className="sidebar-brand">
          <span role="img" aria-label="hub" className="sidebar-logo">
            🗺️
          </span>
          <span className="sidebar-title">LocalLink Hub</span>
        </div>
        <nav>
          <ul>
            {/* Core Platform */}
            <SectionHeader icon={icons.map} text="Platform" />
            <li
              className={activeTab === "dashboard" ? "active" : ""}
              onClick={() => setActiveTab("dashboard")}
            >
              <span role="img" aria-label="map">{icons.map}</span>
              <span>Community Map</span>
            </li>
            <li
              className={activeTab === "exchange" ? "active" : ""}
              onClick={() => setActiveTab("exchange")}
            >
              <span role="img" aria-label="token">{icons.token}</span>
              <span>Skill Bartering Tokens</span>
            </li>
            <li
              className={activeTab === "payitforward" ? "active" : ""}
              onClick={() => setActiveTab("payitforward")}
            >
              <span role="img" aria-label="payitforward">{icons.payitforward}</span>
              <span>"Pay-It-Forward" Chains</span>
            </li>
            <li
              className={activeTab === "resourceLibrary" ? "active" : ""}
              onClick={() => setActiveTab("resourceLibrary")}
            >
              <span role="img" aria-label="library">{icons.library}</span>
              <span>Shared Resource Libraries</span>
            </li>
            <li
              className={activeTab === "exchangeMatch" ? "active" : ""}
              onClick={() => setActiveTab("exchangeMatch")}
            >
              <span role="img" aria-label="match">{icons.match}</span>
              <span>Volunteer Matchmaking</span>
            </li>
            <li
              className={activeTab === "skillCircles" ? "active" : ""}
              onClick={() => setActiveTab("skillCircles")}
            >
              <span role="img" aria-label="circles">{icons.circles}</span>
              <span>Skill Circles & Groups</span>
            </li>
            <li
              className={activeTab === "mentorship" ? "active" : ""}
              onClick={() => setActiveTab("mentorship")}
            >
              <span role="img" aria-label="mentorship">{icons.mentorship}</span>
              <span>Skill Mentorship Match</span>
            </li>
            <li
              className={activeTab === "aiSkill" ? "active" : ""}
              onClick={() => setActiveTab("aiSkill")}
            >
              <span role="img" aria-label="AI-predict">{icons.ai}</span>
              <span>AI Skill Recommender</span>
            </li>
	    <li
              className={activeTab === "calendar" ? "active" : ""}
              onClick={() => setActiveTab("calendar")}
            >
              <span role="img" aria-label="calendar">{icons.calendar}</span>
              <span>Local Event Calendar</span>
            </li>
            {/* Social Impact Group */}
            <SectionHeader icon={icons.score} text="Social Impact" />
            <li
              className={activeTab === "impactScore" ? "active" : ""}
              onClick={() => setActiveTab("impactScore")}
            >
              <span role="img" aria-label="impact-score">{icons.score}</span>
              <span>Community Impact Score</span>
            </li>
            <li
              className={activeTab === "incubator" ? "active" : ""}
              onClick={() => setActiveTab("incubator")}
            >
              <span role="img" aria-label="incubator">{icons.incubator}</span>
              <span>Micro-Project Incubator</span>
            </li>
            <li
              className={activeTab === "tracker" ? "active" : ""}
              onClick={() => setActiveTab("tracker")}
            >
              <span role="img" aria-label="tracker">{icons.tracker}</span>
              <span>Resource Lifecycle Tracker</span>
            </li>
            <li
              className={activeTab === "eco" ? "active" : ""}
              onClick={() => setActiveTab("eco")}
            >
              <span role="img" aria-label="eco">{icons.eco}</span>
              <span>Eco-Friendly Recommendations</span>
            </li>
            <li
              className={activeTab === "dashboardImpact" ? "active" : ""}
              onClick={() => setActiveTab("dashboardImpact")}
            >
              <span role="img" aria-label="dashboard">{icons.dashboard}</span>
              <span>Impact Tracker Dashboard</span>
            </li>
            {/* Community Life Group */}
            <SectionHeader icon={icons.stories} text="Community" />
            <li
              className={activeTab === "stories" ? "active" : ""}
              onClick={() => setActiveTab("stories")}
            >
              <span role="img" aria-label="stories">{icons.stories}</span>
              <span>Stories & Spotlights</span>
            </li>
            <li
              className={activeTab === "polls" ? "active" : ""}
              onClick={() => setActiveTab("polls")}
            >
              <span role="img" aria-label="polls">{icons.polls}</span>
              <span>Neighborhood Polls & Proposals</span>
            </li>
            <li
              className={activeTab === "boards" ? "active" : ""}
              onClick={() => setActiveTab("boards")}
            >
              <span role="img" aria-label="forum">{icons.forum}</span>
              <span>Discussion Boards & Forums</span>
            </li>
            <li
              className={activeTab === "knowledge" ? "active" : ""}
              onClick={() => setActiveTab("knowledge")}
            >
              <span role="img" aria-label="archive">{icons.archive}</span>
              <span>Local Knowledge Archive</span>
            </li>
            {/* Well-being Group */}
            <SectionHeader icon={icons.wellness} text="Well-being" />
            <li
              className={activeTab === "mentalHealth" ? "active" : ""}
              onClick={() => setActiveTab("mentalHealth")}
            >
              <span role="img" aria-label="mental-health">{icons.mental}</span>
              <span>Mental Health First-Aid</span>
            </li>
            <li
              className={activeTab === "wellness" ? "active" : ""}
              onClick={() => setActiveTab("wellness")}
            >
              <span role="img" aria-label="wellness">{icons.wellness}</span>
              <span>Wellness & Check-In</span>
            </li>
            {/* Preparedness and Support */}
            <SectionHeader icon={icons.crisis} text="Preparedness" />
            <li
              className={activeTab === "crisis" ? "active" : ""}
              onClick={() => setActiveTab("crisis")}
            >
              <span role="img" aria-label="crisis">{icons.crisis}</span>
              <span>Emergency Broadcasts</span>
            </li>
            <li
              className={activeTab === "aid" ? "active" : ""}
              onClick={() => setActiveTab("aid")}
            >
              <span role="img" aria-label="aid">{icons.aid}</span>
              <span>Local Aid Coordination</span>
            </li>
            <li
              className={activeTab === "disaster" ? "active" : ""}
              onClick={() => setActiveTab("disaster")}
            >
              <span role="img" aria-label="disaster">{icons.disaster}</span>
              <span>Disaster Readiness Tools</span>
            </li>
            {/* Learning & Growth */}
            <SectionHeader icon={icons.challenge} text="Learning" />
            <li
              className={activeTab === "challenges" ? "active" : ""}
              onClick={() => setActiveTab("challenges")}
            >
              <span role="img" aria-label="challenge">{icons.challenge}</span>
              <span>Skill-Up Challenges</span>
            </li>
            {/* Grants */}
            <SectionHeader icon={icons.grants} text="Grants & Access" />
            <li
              className={activeTab === "grants" ? "active" : ""}
              onClick={() => setActiveTab("grants")}
            >
              <span role="img" aria-label="grants">{icons.grants}</span>
              <span>Micro-Grants</span>
            </li>
            {/* Inclusion */}
            <li
              className={activeTab === "multilingual" ? "active" : ""}
              onClick={() => setActiveTab("multilingual")}
            >
              <span role="img" aria-label="multilingual">{icons.multi}</span>
              <span>Multilingual Support</span>
            </li>
            <li
              className={activeTab === "accessibility" ? "active" : ""}
              onClick={() => setActiveTab("accessibility")}
            >
              <span role="img" aria-label="access">{icons.access}</span>
              <span>Accessibility First</span>
            </li>
          </ul>
        </nav>
        <footer className="sidebar-footer">
          <ProfileQuickView />
        </footer>
      </aside>
    );
  }

  // PUBLIC_INTERFACE
  function ProfileQuickView() {
    return (
      <div className="profile-quickview">
        <div className="profile-avatar">
          <img
            src="https://api.dicebear.com/7.x/thumbs/svg?seed=verified"
            alt="avatar"
          />
        </div>
        <div>
          <div className="profile-name">
            Jennifer <span className="profile-badge" title="Verified">&#x2714;</span>
          </div>
          <div className="profile-meta">Verified Member</div>
        </div>
      </div>
    );
  }

  // PUBLIC_INTERFACE
  function MapDashboard() {
    return (
      <div className="main-map">
        <div className="map-placeholder">
          <span role="img" aria-label="Map">🗺️</span>
        </div>
        <div className="community-list-label">Nearby Micro-Communities</div>
        <ul className="community-list">
          {geoCommunities.map((g) => (
            <li key={g.id}>
              <div>
                <span className="community-name">{g.name}</span>
                <span className="community-members">{g.members} members</span>
              </div>
              {g.isJoined ? (
                <button className="btn-secondary joined">Joined</button>
              ) : (
                <button className="btn-primary">Join</button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // PUBLIC_INTERFACE
  function Feed() {
    return (
      <section className="main-feed">
        <div className="feed-header">
          <h2>
            Community Feed
            <span className="feed-desc">
              {" "}
              | Hyper-local offers, requests & updates
            </span>
          </h2>
        </div>
        <div>
          {postsFeed.map((post) => (
            <article key={post.id} className={`feed-post type-${post.type.toLowerCase().replace(/ /g, "-")}`}>
              <div className="post-meta">
                <span className="post-user">
                  {post.user}
                  {post.verified && <span className="verified-badge" title="Verified">&#10004;</span>}
                </span>{" "}
                <span className="post-community">{post.community}</span>
                <span className="post-time">{post.time}</span>
                <span className="post-type">{post.type}</span>
              </div>
              <div className="post-content">{post.content}</div>
              <div className="post-actions">
                <button className="btn-small reply">Reply</button>
                <button className="btn-small trust">Trust</button>
                <button className="btn-small report">Report</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  // PUBLIC_INTERFACE
  function MainContent() {
    // For future: switch views by activeTab, now just shows all main modules in layout
    return (
      <div className="content-container">
        <div className="content-left">
          <MapDashboard />
        </div>
        <div className="content-main">
          <Feed />
        </div>
      </div>
    );
  }

  return (
    <div className="llh-root">
      <Sidebar />
      <main className="llh-main">
        <MainContent />
      </main>
    </div>
  );
}

export default MainContainer;
