// src/js/views/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Home.css'; // Ensure correct path
import '../../styles/CommonStyles.css';
import tryshaImage from '../../img/trysha.jpg'; // Update path as necessary

// src/js/views/Home.js content update

const Home = () => {
    const calendlyLink = "https://calendly.com/thooker86/work-appointments";
    return (
        <div className="home-container">
            <h1>Meet Trysha Hooker - Your Personal Insurance Guide</h1>
            <div className="agent-introduction">
                <img src={tryshaImage} alt="Trysha Hooker" className="agent-photo"/>
                <p>
                    Hello! I'm Trysha Hooker, your guide through the complexities of personal and family protection. I specialize in providing essential resources like the Child Safe Kit, Will Kit, and a $2,000 Accidental Death and Dismemberment Certificate – all at no cost to you.
                </p>
                <p>
                    Interested in securing peace of mind for your family? Let’s connect for a friendly chat. We can discuss how these valuable tools can fit into your life, ensuring you’re well-prepared for the future.
                </p>
                <p>
                    It’s important to me that you feel informed and confident about your family’s safety and security. If you have questions or need guidance, I’m here to help – with no pressure or obligation.
                </p>
                <p>
                    Ready to learn more? Schedule a convenient time for our discussion. Your well-being is my priority, and the free kit is yours to keep, just for meeting with me.
                </p>
                <div className="appointment-links">
                <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Schedule A Meeting</a>
                </div>
            </div>
            <div className="offers-section">
                <h2>Exclusive Offers</h2>
                <ul>
                    <li><Link to="/ChildSafeKit">Free Child Safe Kit</Link></li>
                    <li><Link to="/FreeWillKit">Free Will Kit</Link></li>
                    <li><Link to="/Accidental">Free $2,000 Accidental Death and Dismemberment Certificate</Link></li>
                </ul>
            </div>
        </div>
    );
};


export default Home;
