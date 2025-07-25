/**
 * Página do Dashboard.
 * Exibe os principais indicadores e dados resumidos da aplicação,
 * como cards de estatísticas e gráficos.
 */
import React from 'react';
import './style.css';
import { FaUserFriends, FaUserTie, FaFileInvoiceDollar, FaHeadset, FaCalendarCheck, FaTimesCircle, FaDollarSign } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function StatCard({ icon, value, label, color }) {
  return (
    <div className="statCard">
      <div className="statIconWrapper" style={{ color }}>{icon}</div>
      <div className="statTextWrapper">
        <span className="statValue">{value}</span>
        <span className="statLabel">{label}</span>
      </div>
      <div className="statProgressBar" style={{ backgroundColor: color }}></div>
    </div>
  );
}

function InfoCard({ icon, title, value, circleColor }) {
  return (
    <div className="infoCard">
      <div className="infoTextWrapper">
        <span className="infoTitle">{title}</span>
        <span className="infoValue">{value}</span>
      </div>
      <div className="infoIconWrapper" style={{ backgroundColor: circleColor }}>{icon}</div>
    </div>
  );
}

function BarChart() {
  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
    datasets: [{
      label: 'Faturamento',
      data: [1200000, 500000, 200000, 750000, 400000, 150000, 900000],
      backgroundColor: '#82D19C',
      borderRadius: 5,
      barThickness: 40,
    }],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
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
      x: { grid: { display: false } },
    },
  };
  return (
    <div className="chartContainer">
      <div className="chartHeader">
        <span className="chartTitle">FATURAMENTO</span>
        <div className="chartHeaderRight">
          <span>Período:</span>
          <button className="datePicker">16/07/2025 à 16/07/2026</button>
        </div>
      </div>
      <div className="chartWrapper"><Bar data={data} options={options} /></div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="dashboard-content">
      <h1 className="pageTitle">Dashboard</h1>
      <section className="statsGrid">
        <StatCard icon={<FaUserFriends />} value="300" label="Clientes" color="#34A853" />
        <StatCard icon={<FaUserTie />} value="250" label="Prestadores" color="#4285F4" />
        <StatCard icon={<FaFileInvoiceDollar />} value="2" label="Contas à Pagar" color="#8A2BE2" />
        <StatCard icon={<FaHeadset />} value="5" label="Chamados" color="#C46210" />
      </section>
      <section className="mainGrid">
        <div className="chartArea">
          <BarChart />
        </div>
        <div className="infoArea">
          <InfoCard icon={<FaCalendarCheck />} title="AGENDAMENTOS DIA" value="20+" circleColor="#E6F4E9" />
          <InfoCard icon={<FaTimesCircle />} title="CANCELADOS DIA" value="2" circleColor="#FCE8E6" />
          <InfoCard icon={<FaDollarSign />} title="FATURADO DIA" value="R$ 2.500,00" circleColor="#E6F4E9" />
          <InfoCard icon={<FaDollarSign />} title="FATURADO SEMANA" value="R$ 2.500,00" circleColor="#E6F4E9" />
        </div>
      </section>
    </div>
  );
}