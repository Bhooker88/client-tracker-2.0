import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/FreeWillKit.css';
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
            <div className="why-this-matters">
                <h2>Why This Matters</h2>
                <p>
                    Imagine the emotional turmoil your loved ones would face, navigating through grief while being burdened with the uncertainty of your final wishes. Without a will, they are left to guess at crucial decisions, from the distribution of your assets to the type of care you would have wanted. This uncertainty can lead to family disputes, legal headaches, and additional stress during an already difficult time.
                </p>
                <p>
                    By articulating your wishes now, you provide them not only with clarity, but with a significant emotional reprieve. They can focus on mourning and healing rather than being caught up in preventable confusion and conflict.
                </p>
            </div>
            <p>
                Consulting a lawyer for these documents can be expensive and time-consuming. Our Free Will Kit simplifies this process. By scheduling a meeting, we guide you step-by-step, saving time and money while providing peace of mind.
            </p>
            <div className="contact-info">
                <h2>Get Started Today</h2>
                <p>To receive your Free Will Kit and start the process, please contact Trysha:</p>
                <ul>
                    <li><a href={freeWillKitEmail}>Email me</a> or send an email to thooker@globeserur.com</li>
                    <li>Phone- Call or Text: 989-295-3501</li>
                </ul>
                <p>Or schedule a meeting directly:</p>
                <a href={freeWillKitCalendlyLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Schedule A Meeting</a>
                <div className="navigation-back">
                         <Link to="/" className="back-to-home">← Back to Home</Link>
                </div>
                    <div className="additional-links">
                         <Link to="/childsafekit" className="additional-link">Child Safe Kit</Link>
                         <br></br>
                         <Link to="/accidental" className="additional-link">Accidental Insurance</Link>
                    </div> 
            </div>
        </div>
    );
};

export default FreeWillKit;
