import React, { useState } from "react";
import {
  Home,
  Map,
  Radio,
  BarChart3,
  User,
  Plus,
} from "lucide-react";

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

function AppShell({ activeTab, setActiveTab, children, onReport }) {
  return (
    <div className="page">
      <div className="phone-shell">
        <div className="screen-content">{children}</div>

        <button className="fab" onClick={onReport}>
          <Plus size={26} />
        </button>

        <nav className="bottom-nav">
          <Home
            size={22}
            className={activeTab === "home" ? "active" : ""}
            onClick={() => setActiveTab("home")}
          />
          <Map
            size={22}
            className={activeTab === "map" ? "active" : ""}
            onClick={() => setActiveTab("map")}
          />
          <BarChart3
            size={22}
            className={activeTab === "pulse" ? "active" : ""}
            onClick={() => setActiveTab("pulse")}
          />
          <Radio
            size={22}
            className={activeTab === "live" ? "active" : ""}
            onClick={() => setActiveTab("live")}
          />
          <User
            size={22}
            className={activeTab === "profile" ? "active" : ""}
            onClick={() => setActiveTab("profile")}
          />
        </nav>
      </div>
    </div>
  );
}

function Placeholder({ title }) {
  return (
    <div className="placeholder-screen">
      <h2>{title}</h2>
      <p>Module loading...</p>
    </div>
  );
}

export default function App() {
  const [entered, setEntered] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [reportMode, setReportMode] = useState(false);

  if (!entered) {
    return <Splash onEnter={() => setEntered(true)} />;
  }

  let content;

  if (reportMode) {
    content = <Placeholder title="REPORT ISSUE" />;
  } else {
    switch (activeTab) {
      case "map":
        content = <Placeholder title="JAMII MAP" />;
        break;
      case "pulse":
        content = <Placeholder title="JAMII PULSE" />;
        break;
      case "live":
        content = <Placeholder title="JAMII LIVE" />;
        break;
      case "profile":
        content = <Placeholder title="PROFILE" />;
        break;
      default:
        content = <Placeholder title="HOME" />;
    }
  }

  return (
    <AppShell
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      onReport={() => setReportMode(true)}
    >
      {content}
    </AppShell>
  );
}
