import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import DisplayFeed from "./components/feed/FeedList";

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Routes>
          <Route path="/" element={<DisplayFeed />} />
          <Route path="about" element={<h1>About</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
