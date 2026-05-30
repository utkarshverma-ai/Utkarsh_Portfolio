import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Web Developer Intern</h4>
                <h5>Digital Universe &middot; Remote</h5>
              </div>
              <h3>Present</h3>
            </div>
            <p>
              June 2026 – November 2026 (Present). Assisting in full-stack web
              application development on live projects, supporting both
              front-end and back-end development tasks, and reporting directly
              to management while contributing to active development cycles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AWS Cloud Computing Intern</h4>
                <h5>JOVAC &middot; Remote</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              June 2024 – August 2024. Worked hands-on with AWS core services
              including EC2, S3, IAM, VPC, Lambda, and CloudWatch. Implemented
              Load Balancing and Auto Scaling for cloud infrastructure setups
              and gained practical experience in cloud architecture and
              deployment pipelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
