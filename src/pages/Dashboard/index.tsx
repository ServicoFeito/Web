import React from 'react';
import Sidebar from '../../components/Sidebar';
import StatCard from '../../components/StatCard';
import BarChart from '../../components/BarChart';
import InfoCard from '../../components/InfoCard';
import './style.css';
import { FaUserFriends, FaUserTie, FaFileInvoiceDollar, FaHeadset, FaCalendarCheck, FaTimesCircle, FaDollarSign } from 'react-icons/fa';

export default function Dashboard() {
  return (
    <div className="dashboardPage">
      <Sidebar />
      <main className="mainContent">

        <section className="statsGrid">
          <StatCard icon={<FaUserFriends />} value="300" label="Clientes" color="#4daf50" />
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
          </div>
        </section>
      </main>
    </div>
  );
}