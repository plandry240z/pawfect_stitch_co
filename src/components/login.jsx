import { useNavigate } from "react-router-dom";
import "../css/login.css";

const SESSION_KEY = "pawfect_session";

export function getSession() { return sessionStorage.getItem(SESSION_KEY); }
export function clearSession() { sessionStorage.removeItem(SESSION_KEY); }

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-blob login-blob-pink" />
      <div className="login-blob login-blob-blue" />
      <div className="login-blob login-blob-tan" />

      <div className="login-card">
        <div className="login-card-blob" />

        <div className="login-header">
          <h1 className="login-title">Welcome to Pawfect Stitch Co!</h1>
          <p className="login-subtitle">Sign in to your account</p>
        </div>

        <div className="login-form">
          <div className="form-group">
            <label className="form-label">Username</label>
            <input className="form-input" type="text" />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input className="form-input" type="password" />
          </div>

          <button className="form-submit" onClick={() => navigate("/home")}>
            Sign In
          </button>
        </div>

      </div>
    </div>
  );
}