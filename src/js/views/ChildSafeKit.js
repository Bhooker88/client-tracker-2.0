import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import "../../styles/ChildSafeKit.css";
import '../../styles/CommonStyles.css';

const ChildSafeKit = () => {
    const childSafeKitCalendlyLink = "https://calendly.com/thooker86/work-appointments?text=ChildSafeKit";
    const childSafeKitEmail = "mailto:thooker@globeserur.com?subject=Inquiry%20about%20Child%20Safe%20Kit&body=Hi%20Trysha,";
    return (
        <div className="childsafe-container">
            <h1>Protect Your Children with the Child Safe Kit App</h1>
            <p>
                In today's world, ensuring the safety of our children is more important than ever. The Child Safe Kit app is a crucial tool for parents and guardians, designed to provide an extra layer of security in the unpredictable moments of life.
            </p>
            <div className="importance-section">
                <h2>Why This App is Essential:</h2>
                <p>
                    Imagine a scenario where your toddler wanders away while you're shopping, or doesn't return home at the usual time after playing. The initial moments following the realization that your child is missing are critical.
                </p>
                <p>
                    The Child Safe Kit app streamlines the process of providing crucial information to law enforcement, ensuring that they can act swiftly. Instead of scrambling to find recent photos or remembering specific details under stress, you can have all the necessary information ready and shareable at the touch of a button.
                </p>
                <p>
                    Time is of the essence in these situations. Reducing the time it takes to start a search can significantly increase the chances of safely recovering a missing child. By preparing in advance with the Child Safe Kit app, you're taking a proactive step towards safeguarding your child's well-being.
                </p>
            </div>
            <div className="activation-section">
                <h2>Get Your Free Activation Code:</h2>
                <p>
                    The Child Safe Kit app is available for free, but requires an activation code. Obtain this code by scheduling a meeting with Trysha Hooker, who will provide you with the necessary details and guide you through the setup process.
                </p>
                <div className="contact-info">
                    <p>To get started and receive your free activation code, please contact Trysha:</p>
                    <ul>
                    <li><a href={childSafeKitEmail}>Email me</a> Use the link or send me an Email at thooker@globeserur.com</li>
                        <li>Phone- Call or Text : 989-295-3501</li>
                    </ul>
                    <p>Or schedule a meeting directly:</p>
                    <a href={childSafeKitCalendlyLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Schedule A Meeting</a>
					<div className="navigation-back">
                         <Link to="/" className="back-to-home">← Back to Home</Link>
                </div>
                    <div className="additional-links">
                      <Link to="/freewillkit" className="additional-link">Free Will Kit</Link>
                      <br></br>
                      <Link to="/accidental" className="additional-link">Accidental Insurance</Link>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default ChildSafeKit;
