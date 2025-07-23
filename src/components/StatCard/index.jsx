import React from 'react';
import './style.css';

export default function StatCard({ icon, value, label, color }) {
  return (
    <div className="statCard">
      <div className="statIconWrapper" style={{ color }}>
        {icon}
      </div>
      <div className="statTextWrapper">
        <span className="statValue">{value}</span>
        <span className="statLabel">{label}</span>
      </div>
      <div className="statProgressBar" style={{ backgroundColor: color }}></div>
    </div>
  );
}