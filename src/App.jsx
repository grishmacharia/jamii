import React, { useState } from "react";
import {
  Home,
  Map,
  Radio,
  BarChart3,
  User,
  Plus,
  Eye,
  Trophy,
  Users,
  Heart,
  MessageCircle,
  Share2,
  Shield,
} from "lucide-react";

const feed = [
  {
    title: "Water Crisis Townhall",
    desc: "Residents in Kiambere discuss water access and stalled infrastructure.",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Muraru School Alert",
    desc: "Community voices call for classroom upgrades and dignity in education.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
  },
];

function Splash({ onEnter }) {
  return (
    <div className="splash">
      <div className="logo-box">J</div>
      <h1>JAMII</h1>
      <p className="subtitle">MBEERE SOUTH</p>
      <p className="powered">Powered by Suzuki Networks</p>
      <button onClick={onEnter}>ENTER JAMII</button>
    </div>
  );
}

function HomeScreen() {
  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80')",
        }}
      >
        <div className="hero-overlay">
          <span>LIVE NOW</span>
          <h2>Water Crisis Townhall — Kiambere</h2>
        </div>
      </div>

      <div className="quick-actions">
        <div>
          <Shield size={18} />
          <span>WATCHDOG</span>
        </div>
        <div>
          <Users size={18} />
          <span>ACTION</span>
        </div>
        <div>
          <Trophy size={18} />
          <span>REWARDS</span>
        </div>
      </div>

      {feed.map((item, i) => (
        <div className="feed-card" key={i}>
          <img src={item.image} alt="" />
          <div className="feed-body">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <div className="feed-actions">
              <div><Heart size={16} />82</div>
              <div><MessageCircle size={16} />14</div>
              <div><Share2 size={16} />Share</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

function MapScreen() {
  return (
    <div>
      <h2>JAMII MAP</h2>
      <div className="feature-card">
        Development intelligence map across Mbeere South.
      </div>
    </div>
  );
}

function PulseScreen() {
  return (
    <div>
      <h2>JAMII PULSE</h2>
      <div className="stats-row">
        <div className="stat-card">147 Projects</div>
        <div className="stat-card">3.4K Residents</div>
        <div className="stat-card">82 Reports</div>
      </div>
    </div>
  );
}

function LiveScreen() {
  return (
    <div>
      <h2>JAMII LIVE</h2>
      <div className="feature-card">
        Civic interviews, debates and community livestreams.
      </div>
    </div>
  );
}

function ProfileScreen() {
  return (
    <div>
      <h2>PROFILE</h2>
      <div className="feature-card">
        Citizen score, activity and rewards.
      </div>
    </div>
  );
}

function ReportScreen() {
  return (
    <div>
      <h2>REPORT ISSUE</h2>
      <div className="feature-card">
        <textarea placeholder="Describe issue..." />
      </div>
    </div>
  );
}

export default function App() {
  const [entered, setEntered] = useState(false);
  const [tab, setTab] = useState("home");
  const [report, setReport] = useState(false);

  if (!entered) {
    return <Splash onEnter={() => setEntered(true)} />;
  }

  let content;

  if (report) {
    content = <ReportScreen />;
  } else {
    switch (tab) {
      case "map":
        content = <MapScreen />;
        break;
      case "pulse":
        content = <PulseScreen />;
        break;
      case "live":
        content = <LiveScreen />;
        break;
      case "profile":
        content = <ProfileScreen />;
        break;
      default:
        content = <HomeScreen />;
    }
  }

  return (
    <div className="page">
      <div className="phone-shell">
        <div className="screen-content">{content}</div>

        <button className="fab" onClick={() => setReport(true)}>
          <Plus size={24} />
        </button>

        <nav className="bottom-nav">
          <Home
            size={22}
            className={tab === "home" ? "active" : ""}
            onClick={() => {
              setReport(false);
              setTab("home");
            }}
          />
          <Map
            size={22}
            className={tab === "map" ? "active" : ""}
            onClick={() => {
              setReport(false);
              setTab("map");
            }}
          />
          <BarChart3
            size={22}
            className={tab === "pulse" ? "active" : ""}
            onClick={() => {
              setReport(false);
              setTab("pulse");
            }}
          />
          <Radio
            size={22}
            className={tab === "live" ? "active" : ""}
            onClick={() => {
              setReport(false);
              setTab("live");
            }}
          />
          <User
            size={22}
            className={tab === "profile" ? "active" : ""}
            onClick={() => {
              setReport(false);
              setTab("profile");
            }}
          />
        </nav>
      </div>
    </div>
  );
}
