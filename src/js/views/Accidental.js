import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import "../../styles/Accidental.css";
import '../../styles/CommonStyles.css';


const Accidental = () => {
    
    const accidentalCalendlyLink = "https://calendly.com/thooker86/work-appointments?text=AccidentalCertificate";
    const accidentalEmail = "mailto:thooker@globeserur.com?subject=Inquiry%20about%20$2,000%20Accidental%20Death%20and%20Dismemberment%20Certificate&body=Hi%20Trysha,";

// Use accidentalCalendlyLink and accidentalEmail in your <a> tags respectively

    return (
        <div className="accidental-container">
            
            <h1>Secure Your Peace of Mind with a $2,000 Accidental Death and Dismemberment Policy</h1>
            <p>
                Unforeseen accidents can impact anyone, leaving families to deal with emotional and financial strain. The $2,000 Accidental Death and Dismemberment Policy provided by us offers a safety net, ensuring that you and your loved ones have support during these challenging times.
            </p>
            <p>
                This policy is designed to provide crucial financial assistance in the event of an accident, helping cover unexpected costs and alleviating financial burdens.
            </p>
            
            <div className="contact-info">
                <h2>Claim Your Free Policy</h2>
                <p>To receive your free $2,000 Accidental Death and Dismemberment Policy, please contact me:</p>
                <ul>
                <li><a href={accidentalEmail}>Email me</a> Use the link or send me an Email at thooker@globeserur.com</li>
                        <li>Phone- Call or Text : 989-295-3501</li>
                    </ul>
                    <p>Or schedule a meeting directly:</p>
                    <a href={accidentalCalendlyLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Schedule A Meeting</a>
                <div className="navigation-back">
                         <Link to="/" className="back-to-home">← Back to Home</Link>
                </div>
                    <div className="additional-links">
                         <Link to="/childsafekit" className="additional-link">Child Safe Kit</Link>
                         <br></br>
                         <Link to="/freewillkit" className="additional-link">Free Will Kit</Link>
                    </div> 
          </div>
        </div>
    );
};

export default Accidental;