import { useState } from "react";
import "./App.css";

function App() {
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  const [matchDate, setMatchDate] = useState("");
  const [matchTime, setMatchTime] = useState("");

  return (
    <div className="container">
      <div className="inputs">
        <input
          type="text"
          placeholder="Home Team"
          value={homeTeam}
          onChange={(e) => setHomeTeam(e.target.value)}
        />
        <input
          type="text"
          placeholder="Away Team"
          value={awayTeam}
          onChange={(e) => setAwayTeam(e.target.value)}
        />
        <input
          type="date"
          value={matchDate}
          onChange={(e) => setMatchDate(e.target.value)}
        />
        <input
          type="time"
          value={matchTime}
          onChange={(e) => setMatchTime(e.target.value)}
        />
      </div>

      <div className="poster">
        <div className="poster-div">
          <h1 className="final">FINAL</h1>
           <h4 className="small-title">Cricket <br /> Championship</h4> 
        </div>
        <h1 className="match">MATCH</h1>
        <div className="teams">
          <h3 className="home">{homeTeam || "HOME"}</h3>
          <h3 className="vs">VS</h3>
          <h3 className="away">{awayTeam || "AWAY"}</h3>
        </div>
        <p className="datetime">
          {matchDate ? new Date(matchDate).toLocaleDateString() : "25th February 2025"}
          <br />
          {matchTime ? `At ${matchTime}` : "At 11:00 AM"}
        </p>
      </div>
    </div>
  );
}

export default App;
