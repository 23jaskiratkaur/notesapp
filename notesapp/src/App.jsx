import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="logo">🚀 AWS React App</div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#login">Login</a>
          <a href="#signup">Sign Up</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="app-body">
        <div className="welcome-card">
          <h1>Welcome to My First React App on AWS!</h1>
          <p>
            This is your deployed React app running smoothly on AWS.
            Explore, experiment, and make it yours.
          </p>
          <button className="cta-btn">Get Started</button>
        </div>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>© 2026 My AWS React App. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
