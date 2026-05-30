import "./styles/Certifications.css";

type Certification = {
  name: string;
  issuer: string;
};

const certifications: Certification[] = [
  { name: "Software Engineering", issuer: "NPTEL" },
  { name: "Management Information Systems (MIS)", issuer: "NPTEL" },
  { name: "E-Commerce", issuer: "NPTEL" },
  { name: "AWS Cloud Computing", issuer: "JOVAC" },
];

const Certifications = () => {
  return (
    <div className="certifications-section section-container">
      <h2>
        My <span>certifications</span>
      </h2>
      <div className="certifications-info">
        {certifications.map((cert, index) => (
          <div className="certification-box" key={index}>
            <h4>{cert.name}</h4>
            <h5>{cert.issuer}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
