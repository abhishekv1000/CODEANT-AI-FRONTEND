import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faBitbucket, faMicrosoft, faGitlab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import logo from '../logo.png';
import bottomImage from '../Screenshot (1743).png'; // Correct path to the image
import issuesLogo from '../ff.png'; // Import the uploaded logo image
import './Signup.css';

library.add(faGithub, faBitbucket, faMicrosoft, faGitlab);

const Signup = () => {
  const [activeTab, setActiveTab] = useState('SAAS');

  const renderLoginButtons = () => {
    if (activeTab === 'SAAS') {
      return (
        <>
          <button className="login-button github-button">
            <FontAwesomeIcon icon={faGithub} /> Sign in with Github
          </button>
          <button className="login-button bitbucket-button">
            <FontAwesomeIcon icon={faBitbucket} /> Sign in with Bitbucket
          </button>
          <button className="login-button azure-button">
            <FontAwesomeIcon icon={faMicrosoft} /> Sign in with Azure Devops
          </button>
          <button className="login-button gitlab-button">
            <FontAwesomeIcon icon={faGitlab} /> Self Hosted GitLab
          </button>
        </>
      );
    } else if (activeTab === 'Self Hosted') {
      return (
        <>
          <button className="login-button gitlab-button">
            <FontAwesomeIcon icon={faGitlab} /> Self Hosted GitLab
          </button>
          <button className="login-button sso-button">
            <FontAwesomeIcon icon={faMicrosoft} /> Sign in with SSO
          </button>
        </>
      );
    }
  };

  return (
    <div className="login-container">
      <div className="marketing-box">
        <div className="marketing-content">
          <img src={logo} alt="CodeAnt AI" className="logo-g" />
          <h1>AI to Detect & Autofix Bad Code</h1>
        </div>
        <hr className="tab-dividers" />
        <div className="stats">
          <div className="stat-item">
            <p>30+</p>
            <p>Language Support</p>
          </div>
          <div className="stat-item">
            <p>10K+</p>
            <p>Developers</p>
          </div>
          <div className="stat-item">
            <p>100K+</p>
            <p>Hours Saved</p>
          </div>
        </div>
        <div className="issue-stat">
          <img src={issuesLogo} alt="Logo" className="issues-logo" /> {/* Add the logo image */}
          <div className="iss-head">
            <p className="issue-fixed-title">Issues Fixed</p>
          </div>
          <p className="issue-fixed-value">
            500K+ 
            <span className="issue-fixed-growth">↑ 14% This week</span>
            </p>
        </div>
      </div>

      <div className="vertical-line"></div>

      <div className="login-box">
        <div className="logo-title-container">
          <img src={logo} alt="CodeAnt AI" className="logo" />
          <h2>Welcome to CodeAnt AI</h2>
        </div>
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'SAAS' ? 'active-tab' : ''}`}
            onClick={() => setActiveTab('SAAS')}
          >
            SAAS
          </button>
          <button
            className={`tab ${activeTab === 'Self Hosted' ? 'active-tab' : ''}`}
            onClick={() => setActiveTab('Self Hosted')}
          >
            Self Hosted
          </button>
        </div>
        <hr className="tab-divider" />
        <div className="login-buttons">
          {renderLoginButtons()}
        </div>
      </div>

      <div className="privacy-policy">
        <p>
          By signing up you agree to the <a href="/privacy">Privacy Policy</a>.
        </p>
      </div>

      {/* Add the bottom-left image */}
      <div className="Sticker">
        <img src={bottomImage} alt="Decorative" className="bottom-left-image" />
      </div>
    </div>
  );
};

export default Signup;
