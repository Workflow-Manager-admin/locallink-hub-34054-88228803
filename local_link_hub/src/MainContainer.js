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
            <li
              className={activeTab === "dashboard" ? "active" : ""}
              onClick={() => setActiveTab("dashboard")}
            >
              <span role="img" aria-label="map">
                📍
              </span>
              <span>Community Map</span>
            </li>
            <li
              className={activeTab === "exchange" ? "active" : ""}
              onClick={() => setActiveTab("exchange")}
            >
              <span role="img" aria-label="exchange">
                🔄
              </span>
              <span>Skill & Resource Exchange</span>
            </li>
            <li
              className={activeTab === "crisis" ? "active" : ""}
              onClick={() => setActiveTab("crisis")}
            >
              <span role="img" aria-label="crisis">
                🚨
              </span>
              <span>Crisis Support</span>
            </li>
            <li
              className={activeTab === "grants" ? "active" : ""}
              onClick={() => setActiveTab("grants")}
            >
              <span role="img" aria-label="grants">
                💸
              </span>
              <span>Micro-Grants</span>
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
