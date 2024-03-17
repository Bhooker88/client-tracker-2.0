// src/js/views/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Home.css"; // Ensure correct path
import "../../styles/CommonStyles.css";
import tryshaImage from "../../img/trysha.jpg"; // Update path as necessary

// src/js/views/Home.js content update

const Home = () => {
  const calendlyLink = "https://calendly.com/thooker86/work-appointments";
  const emailContact = "thooker@globeserur.com";
  const phoneContact = "(989) 295-3501";
  return (
    <div className="home-container">
      <h1>Meet Trysha Hooker - Licensed Life Insurance Agent</h1>
      <div className="agent-introduction">
        <img src={tryshaImage} alt="Trysha Hooker" className="agent-photo" />
        <p>
          Welcome, I’m Trysha Hooker. Think of me as your guide in navigating
          the world of life insurance. I’m here not just to provide insurance,
          but to ensure your family has the security and peace they deserve.
          It’s about more than policies—it’s about protecting the heart of your
          home.
        </p>
        <p>
          Many don’t realize that life insurance tied to your job might not
          cover you forever. It often disappears when you leave your position.
          That's a significant gap in your family's safety net. I’m here to help
          close that gap, ensuring that your coverage is consistent, offering
          you and your family enduring peace of mind.
        </p>
        <p>
          Serving Michigan and New Hampshire, I’m ready to sit down with you,
          understand your unique situation, and explore the options. This
          conversation aims for clarity, not pressure. It's a free,
          no-obligation opportunity to learn how to safeguard your family’s
          future, adapting to whatever changes life may bring.
        </p>
        <p>
          I also provide special, no-cost benefits to immediately enhance your
          family’s safety: a Free Will Kit (covering both last will and
          testament and living wills), Child Safe Kit, and a $2,000 Accidental
          Death and Dismemberment Policy. Explore these benefits by
          clicking on the links below and see how they could support your
          family. Remember, there's absolutely no obligation to purchase
          additional services. It’s about giving you the right coverage and
          peace of mind for your family.
        </p>
        <p>
          Interested in learning more or ready to get started with any of these
          no-cost benefits? Feel free to schedule a meeting or contact me
          directly via email or phone. Let's ensure your family's protection
          together.
        </p>

        <div className="appointment-links">
          <a
            href={calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Schedule A Meeting
          </a>
          <p>
            Email: <a href={`mailto:${emailContact}`}>{emailContact}</a>
          </p>
          <p>
            Phone: <a href={`tel:${phoneContact}`}>{phoneContact}</a>
          </p>
        </div>
      </div>
      <div className="offers-section">
        <h2>Exclusive Offers</h2>
        <ul>
          <li>
            <Link to="/ChildSafeKit">Free Child Safe Kit</Link>
          </li>
          <li>
            <Link to="/FreeWillKit">Free Will Kit</Link>
          </li>
          <li>
            <Link to="/Accidental">
              Free $2,000 Accidental Death and Dismemberment Policy
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
