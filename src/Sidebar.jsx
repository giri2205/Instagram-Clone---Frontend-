
function Sidebar() {
  return (
    <div className="d-flex flex-column p-3 border-end" style={{ width: "250px", height: "100vh" }}>
      <img className="d-block"src="src\assets\Instagram_Text.png"></img>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item mb-2">
          <a href="#" className="nav-link text-dark d-flex align-items-center">
            <i className="bi bi-house-door me-2"></i> Home
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link text-dark d-flex align-items-center">
            <i className="bi bi-search me-2"></i> Search
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link text-dark d-flex align-items-center">
            <i className="bi bi-compass me-2"></i> Explore
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link text-dark d-flex align-items-center">
            <i className="bi bi-collection-play me-2"></i> Reels
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link text-dark d-flex align-items-center">
            <i className="bi bi-chat-dots me-2"></i> Messages
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link text-dark d-flex align-items-center">
            <i className="bi bi-heart me-2"></i> Notifications
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link text-dark d-flex align-items-center">
            <i className="bi bi-plus-square me-2"></i> Create
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link text-dark d-flex align-items-center">
            <i className="bi bi-person me-2"></i> Profile
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link text-dark d-flex align-items-center">
            <i className="bi bi-chat-right-text me-2"></i> Threads
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-dark d-flex align-items-center">
            <i className="bi bi-list me-2"></i> More
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

 
