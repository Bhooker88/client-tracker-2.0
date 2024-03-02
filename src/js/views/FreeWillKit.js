import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/FreeWillKit.css";
import '../../styles/CommonStyles.css';

const FreeWillKit = () => {
    const freeWillKitCalendlyLink = "https://calendly.com/thooker86/work-appointments?text=FreeWillKit";
    const freeWillKitEmail = "mailto:thooker@globeserur.com?subject=Inquiry%20about%20Free%20Will%20Kit&body=Hi%20Trysha,";
    return (
        <div className="freewill-container">
            
            <h1>Secure Your Legacy with Our Free Will Kit</h1>
            <p>
                Preparing for the inevitable is crucial to ensure your final wishes are respected and executed. A will is essential for directing your assets and providing for your loved ones' future.
            </p>
            <p>
                Additionally, a living will ensures your healthcare wishes are followed in situations where you can't communicate. Appointing someone you trust to advocate for you can significantly ease your family's burden during challenging times.
            </p>
            <p>
                Consulting a lawyer for these documents can be expensive and time-consuming. Our Free Will Kit simplifies this process. By scheduling a meeting, we guide you step-by-step, saving time and money while providing peace of mind.
            </p>
            <div className="contact-info">
                <h2>Get Started Today</h2>
                <p>To receive your Free Will Kit and start the process, please contact Trysha:</p>
                <ul>
                <li><a href={freeWillKitEmail}>Email me</a> Use the link or send me an Email at thooker@globeserur.com</li>
                        <li>Phone- Call or Text : 989-295-3501</li>
                    </ul>
                    <p>Or schedule a meeting directly:</p>
                    <a href={freeWillKitCalendlyLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Schedule A Meeting</a>
                <div className="navigation-back">
                <Link to="/" className="back-to-home">← Back to Home</Link>
            </div>
            </div>
        </div>
    );
};

export default FreeWillKit;