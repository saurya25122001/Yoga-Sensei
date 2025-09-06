import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About</h1>
      <div className="about-main">
        <p className="about-content">
          This project is a cutting-edge, real-time AI-based Yoga Trainer designed to evaluate and enhance your yoga practice. Developed as a personal initiative, it has been deployed for public use, offering a valuable resource for both yoga enthusiasts and developers interested in AI. The project is open-source, encouraging collaboration and learning, and is available on GitHub for further exploration and development.
          The AI system operates by first identifying keypoints or coordinates of various body parts in an image. It then employs a classification model to assess the accuracy of yoga poses. When the AI detects a pose with a probability exceeding 95%, it confirms correct execution by turning the virtual skeleton green, providing immediate feedback. This functionality is powered by TensorFlow's pre-trained MoveNet model, which predicts keypoints, and a custom neural network built on top of it to classify yoga poses accurately.
          Initially trained in Python, the model has been converted to TensorFlow.js, enabling it to run efficiently in web browsers. This conversion leverages the power of browser support, making the AI Yoga Trainer accessible and user-friendly for a wide audience. Whether you're a developer looking to learn from or contribute to the project, or a yoga practitioner seeking to refine your poses, this AI tool offers a unique and innovative solution.
        </p>
        <div className="developer-info">
          <h4>About Developer</h4>
          <p className="about-content">
            I'm Saurya, a Full Stack Developer and AI enthusiast with a passion for technology. I enjoy leveraging my skills to create innovative solutions, and I hope this project will be beneficial to you.
          </p>
          <h4>Socials</h4>
          <a href="https://www.linkedin.com/in/sauryapratap/" className="social-link">
            <p className="about-content">Linkedin</p>
          </a>
          <a href="https://leetcode.com/u/sauryapratap9430/" className="social-link">
            <p className="about-content">Leetcode</p>
          </a>
          <a href="https://github.com/saurya25122001" className="social-link">
            <p className="about-content">GitHub</p>
          </a>
        </div>
      </div>
    </div>
  );
}
