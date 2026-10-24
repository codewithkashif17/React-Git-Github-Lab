
import "./index.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <p className="about-label">ABOUT US</p>

          <h2>
            We Build Ideas Into
            <span> Reality</span>
          </h2>

          <p className="about-description">
            Welcome to our project! We are a team of passionate
            developers who enjoy learning new technologies and
            building useful web applications.
          </p>

          <p className="about-description">
            Our goal is to write clean, reusable code, work
            together as a team, and improve our skills through
            practical experience with React and GitHub.
          </p>

          <a href="#contact" className="about-btn">
            Learn More
          </a>
        </div>

        <div className="about-card">
          <div className="about-icon">💻</div>
          <h3>Our Mission</h3>
          <p>
            Learn, collaborate, and create better digital
            experiences through teamwork and innovation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
