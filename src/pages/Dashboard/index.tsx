import React from 'react';
import StatCard from '../../components/StatCard';
import BarChart from '../../components/BarChart';
import InfoCard from '../../components/InfoCard';
import './style.css';
import { FaUserFriends, FaUserTie, FaFileInvoiceDollar, FaHeadset, FaCalendarCheck, FaTimesCircle, FaDollarSign } from 'react-icons/fa';

export default function Dashboard() {
  return (
    <div className="dashboard-content">
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
          <InfoCard icon={<FaCalendarCheck />} title="AGENDAMENTOS DIA" value="20+" circleColor="#34A853" />
          <InfoCard icon={<FaTimesCircle />} title="CANCELADOS DIA" value="2" circleColor="#ff1500ff" />
          <InfoCard icon={<FaDollarSign />} title="FATURADO DIA" value="R$ 2.500,00" circleColor="#34A853" />
          <InfoCard icon={<FaDollarSign />} title="FATURADO SEMANA" value="R$ 2.500,00" circleColor="#34A853" />
        </div>
      </section>
    </div>
  );
}