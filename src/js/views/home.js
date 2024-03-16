// src/js/views/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Home.css'; // Ensure correct path
import '../../styles/CommonStyles.css';
import tryshaImage from '../../img/trysha.jpg'; // Update path as necessary

// src/js/views/Home.js content update

const Home = () => {
    const calendlyLink = "https://calendly.com/thooker86/work-appointments";
    const emailContact = "thooker@globeserur.com"; 
    const phoneContact = "(989) 295-3501"; 
    return (
        <div className="home-container">
            <h1>Meet Trysha Hooker - Your Life Insurance Advisor</h1>
            <div className="agent-introduction">
                <img src={tryshaImage} alt="Trysha Hooker" className="agent-photo"/>
                <p>
                    Welcome! I'm Trysha Hooker, dedicated to guiding you through the intricacies of life insurance and ensuring your family's financial security. I specialize in providing comprehensive coverage solutions, including death benefits and living wills.
                </p>
                <p>
                    Many aren't aware that employer-provided life insurance policies may end if your employment does. It's essential to have a personal policy that safeguards your family's future, regardless of your employment status. I’m here to help you understand your options, with a focus on building a safety net that remains firm.
                </p>
                <p>
                    I am licensed in Michigan and New Hampshire and ready to assist you in finding the right plan. Discussing your life insurance needs shouldn’t be a high-pressure situation. That's why I offer no-cost, no-obligation consultations to explore how life insurance can benefit you and your family.
                </p>
                <p>
                    Furthermore, I offer exclusive no-cost benefits that you can take advantage of immediately, without any obligation to purchase separate policies. These benefits are designed to provide immediate value and peace of mind, ensuring that you can make informed decisions about your family’s security.
                </p>
                <div className="appointment-links">
                    <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Schedule A Meeting</a>
                    <p>Email: <a href={`mailto:${emailContact}`}>{emailContact}</a></p>
                    <p>Phone: <a href={`tel:${phoneContact}`}>{phoneContact}</a></p>
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
