import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AdminPanel from "./components/AdminPanel";
import VotingPanel from "./components/VotingPanel";
import FundmePanel from "./components/FundmePanel";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Just import the file

function App() {
  // Style Objects
  const styles = {
    navbar: {
      backgroundImage: 'url("/headerupdate.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center', 
      padding: "9px 20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      borderBottom: "2px solid #34495e",
    },
    navContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      maxWidth: "1200px",
    },
    navTitle: {
      fontFamily: "'Poppins', sans-serif", 
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    navLinks: {
      display: "flex",
      gap: "20px",
    },
    navLink: {
      textDecoration: "none",
      color: "#ecf0f1",
      fontFamily: "'Poppins', sans-serif", 
      fontSize: "1rem",
      transition: "color 0.3s ease",
    },
    navLinkHover: {
      color: "#1abc9c",
    },
    mainContent: {
      maxWidth: "1200px",
      margin: "40px auto",
      padding: "20px",
    },
    welcomeContainer: {
      textAlign: "center",
      marginTop: "50px",
    },
    welcomeTitle: {
      fontFamily: "'Poppins', sans-serif", 
      fontSize: "2.5rem",
      color: "#edeceb0",
      marginBottom: "20px",
    },
    welcomeSubtitle: {
      fontSize: "1.2rem",
      color: "#edeceb",
      lineHeight: "1.6",
    },
  };

  return (
    <Router>
      {/* Navigation Bar */}
      <nav style={styles.navbar}>
  <div style={{
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    padding: '10px 20px'
  }}>
    <div style={styles.navContainer}>
      <Link to="/" style={{ ...styles.navTitle, textDecoration: "none", color: "#ecf0f1" }}>
        Polling Dapp
      </Link>
      <div style={styles.navLinks}>
        <Link to="/admin" style={styles.navLink}>Admin Panel</Link>
        <Link to="/voting" style={styles.navLink}>Voting Panel</Link>
        <Link to="/fund" style={styles.navLink}>Fund Candidate</Link>
      </div>
    </div>
  </div>
</nav>



      {/* Main Content */}
      <div style={styles.mainContent}>
        <Routes>
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/voting" element={<VotingPanel />} />
          <Route path="/fund" element={<FundmePanel />} />
          <Route
            path="/"
            element={
              <div style={styles.welcomeContainer}>
                <h1 style={styles.welcomeTitle}>Welcome to the Polling Dapp</h1>
                <p style={styles.welcomeSubtitle}>
                  Empower your community by organizing elections and funding
                  candidates with ease.
                </p>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
