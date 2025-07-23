import React from 'react';
import './style.css';

export default function InfoCard({ icon, title, value, circleColor }) {
  return (
    <div className="infoCard">
      <div className="infoTextWrapper">
        <span className="infoTitle">{title}</span>
        <span className="infoValue">{value}</span>
      </div>
      <div className="infoIconWrapper" style={{ backgroundColor: circleColor }}>
        {icon}
      </div>
    </div>
  );
}