import React from 'react';
import './posestart.css'; // Make sure to import the CSS file for styling

export default function PoseStart() {
    return (
        <div className="pose-start-container">
            <div className="pose-start-content">
                <h2 className="pose-start-heading">Get Ready for the Pose</h2>
                <p className="pose-start-description">Prepare yourself and follow the instructions for the next pose.</p>
                <button className="start-btn">Start Pose</button>
            </div>
        </div>
    );
}
