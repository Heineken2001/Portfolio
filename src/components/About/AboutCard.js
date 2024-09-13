import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Huy Tran Nhat </span>
            from <span className="purple"> Ho Chi Minh City, Vietnam.</span>
            <br />
              Motivated and experienced Fullstack Developer with 2.5 years of experience 
              in Fullstack roles. Graduatedfrom Ho Chi Minh University of Technology (Bach Khoa Ho Chi Minh) 
              with a strong ability to comprehendbusiness requirements and implement technical solutions. 
              Proficient in a variety of programming languages and development tools. 
              Adept at collaborating with international and cross-functional teams to design andbuild advanced web applications, 
              ensuring high-quality and bug-free products. 
              Experienced in both front-endand back-end development 
              with a comprehensive understanding of e-commerce and 
              business-oriented technologies.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
