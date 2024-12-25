import React from 'react';
import './task.css';
import logo from '../logo.png';
import { FaRegFolder,FaCog, FaShieldAlt, FaBook, FaEye, FaEyeSlash, FaCode, FaFileAlt, FaClock, FaSearch } from 'react-icons/fa';
// import { FaRegFolder, F } from 'react-icons/fa';


const repositories = [
  { name: 'design-system', language: 'React', size: '7320 KB', updated: '1 day ago', visibility: 'Public' },
  { name: 'codeant-ci-app', language: 'Javascript', size: '5871 KB', updated: '2 days ago', visibility: 'Private' },
  { name: 'analytics-dashboard', language: 'Python', size: '4521 KB', updated: '5 days ago', visibility: 'Private' },
  { name: 'mobile-app', language: 'Swift', size: '3096 KB', updated: '3 days ago', visibility: 'Public' },
  { name: 'e-commerce-platform', language: 'Java', size: '6210 KB', updated: '6 days ago', visibility: 'Private' },
  { name: 'blog-website', language: 'HTML/CSS', size: '1876 KB', updated: '4 days ago', visibility: 'Public' },
];

const Task = () => {
  return (
    <div className="repositories-page">
      <aside className="sidebar">
        <img src={logo} alt="CodeAnt AI" className="logo" />
        <h1>CodeAnt AI</h1>
        <div className="user-dropdown">
          <select class="dropdown">
            <option value="abhishek">ABHISHEK</option>
            <option value="another-option">Another Option</option>
            <option value="more-options">More Options</option>
          </select>

        </div>
        <nav>
          <ul>
            <li><a href="#"><FaRegFolder /> Repositories</a></li>
            <li><a href="#"><FaCog /> AI Code Review</a></li>  {/* Replaced FaCode with FaCog for settings-like functionality */}
            <li><a href="#"><FaShieldAlt /> Cloud Security</a></li>  {/* Replaced FaFileAlt with FaShieldAlt for security */}
            <li><a href="#"><FaBook /> How to Use</a></li>  {/* Replaced FaClock with FaBook for documentation */}
            <li><a href="#"><FaCog /> Settings</a></li>  {/* Replaced FaRegFolder with FaCog for settings */}
          </ul>
        </nav>

      </aside>
      <main className="main-content">
        <header className="header">
          <h2>Repositories</h2>
        
          
          <button className="refresh-button">Refresh All</button>
          <button className="add-repo-button">+ Add Repository</button>
        </header>
        <p>22 Total Repositories</p>
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search Repositories" className="search-bar" />
        </div>
        <div className="repo-list">
          {repositories.map((repo, index) => (
            <div key={index} className="repo-item">
              <div className="bb">
                <h3>{repo.name}</h3>
                <p className="visibility">
                  {repo.visibility === 'Public' ? <FaEye /> : <FaEyeSlash />} {repo.visibility}
                </p>
              </div>
              <div className="datas">
                <p><FaCode /> {repo.language}</p>
                <p><FaFileAlt /> {repo.size}</p>
                <p><FaClock /> {repo.updated}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Task;