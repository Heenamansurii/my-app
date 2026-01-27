import './Dashboard.css'

function Dashboard({ user, onLogout }) {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <button onClick={onLogout} className="logout-button">
          Logout
        </button>
      </div>

      <div className="dashboard-content">
        <div className="welcome-card">
          <h2>Welcome, {user.email}!</h2>
          <p>You are successfully logged in.</p>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>Profile</h3>
            <p>Manage your profile information</p>
          </div>
          <div className="dashboard-card">
            <h3>Settings</h3>
            <p>Update your preferences</p>
          </div>
          <div className="dashboard-card">
            <h3>Activity</h3>
            <p>View your activity history</p>
          </div>
          <div className="dashboard-card">
            <h3>Support</h3>
            <p>Get help and support</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
