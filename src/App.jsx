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

function HomeScreen() {
  return (
    <>
      <h2>JAMII HOME</h2>
      <p>Community intelligence dashboard</p>
    </>
  );
}

function MapScreen() {
  return (
    <>
      <h2>JAMII MAP</h2>
      <p>Development map loading...</p>
    </>
  );
}

function PulseScreen() {
  return (
    <>
      <h2>JAMII PULSE</h2>
      <p>Citizen analytics loading...</p>
    </>
  );
}

function LiveScreen() {
  return (
    <>
      <h2>JAMII LIVE</h2>
      <p>Live civic media loading...</p>
    </>
  );
}

function ProfileScreen() {
  return (
    <>
      <h2>PROFILE</h2>
      <p>Your citizen dashboard</p>
    </>
  );
}

function ReportScreen() {
  return (
    <>
      <h2>REPORT ISSUE</h2>
      <textarea placeholder="Describe issue..." />
    </>
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
        <div className="screen-content">
          {content}
        </div>

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
