import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="home-about-body">
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️
            <br />
            <br />I am fluent in classics like
            <i>
              <b className="purple"> Java, Javascript and TypeScript. </b>
            </i>
            <br />
            <br />
            My field of Interest's are building new &nbsp;
            <i>
              <b className="purple">Web Technologies and Products </b> and
              also in areas related to{" "}
              <b className="purple">
                Blockchain.
              </b>
            </i>
            <br />
            <br />
            Whenever possible, I also apply my passion for developing products
            with <b className="purple">Node.js</b> and
            <i>
              <b className="purple">
                {" "}
                Modern Javascript Library and Frameworks
              </b>
            </i>
            &nbsp; like
            <i>
              <b className="purple"> React.js and Next.js</b>
            </i>
          </p>
          {/* <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dushyant Sirohi </span>
            from <span className="purple"> Toronto, Canada.</span>
            <br />
            I am currently Student of Lambton College.
            <br />
            I have completed Bachelor in Computer Science
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Dushyant</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
