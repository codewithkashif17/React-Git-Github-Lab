
function Usercard() {
  return (
    <div className="user-card">
      <img
        src="https://i.pravatar.cc/150?img=47"
        alt="User Profile"
        className="user-image"
      />

      <h2 className="user-name">Nabiha Javed</h2>

      <p className="user-role">Frontend Developer</p>

      <p className="user-description">
        I love building beautiful and responsive websites using React and CSS.
      </p>

      <button className="user-button">View Profile</button>
    </div>
  );
}

export default Usercard;
