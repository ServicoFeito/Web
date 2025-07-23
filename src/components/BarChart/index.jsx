import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './style.css';
import { FaCalendarAlt, FaChevronDown } from 'react-icons/fa';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Faturamento',
        data: [1200000, 500000, 200000, 750000, 400000, 150000, 900000],
        backgroundColor: '#82D19C',
        borderRadius: 5,
        barThickness: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            if (value >= 1000000) return `${value / 1000000}M`;
            if (value >= 1000) return `${value / 1000}k`;
            return value;
          },
        },
      },
      x: {
        grid: {
          display: false,
        }
      }
    },
  };

  return (
    <div className="chartContainer">
      <div className="chartHeader">
        <span className="chartTitle">FATURAMENTO</span>
        <div className="headerRight">
            <span>Período:</span>
            <button className="datePicker">
                <FaCalendarAlt />
                16/07/2025 à 16/07/2026
                <FaChevronDown />
            </button>
        </div>
      </div>
      <div className="chartWrapper">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}