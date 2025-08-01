import Chart from '../charts/Chart';
import './Main.css';

// Componente principal do dashboard, exibe os cards e gráficos.
const Main = () => {
    return (
        // Elemento principal que engloba todo o conteúdo do dashboard.
        <main>
            <div className="main_container">
                {/* Seção do título principal do dashboard. */}
                <div className="main_title">
                    <div className="main_greeting">
                        <h1>Dashboard</h1>
                    </div>
                </div>

                {/* Seção que agrupa os cards de resumo (KPIs). */}
                <div className="main_cards">
                    <div className="card main_cards_1">
                        <span className="text-title main_card_1">350</span>
                        <div className="card_inner">
                            <p className="text-primary-p">Clientes</p>
                            <i className="bi bi-person-fill main_card_1 big_icon"></i>
                        </div>
                    </div>

                    <div className="card main_cards_2">
                        <span className="text-title main_card_2">578</span>
                        <div className="card_inner">
                            <p className="text-primary-p">Prestadores</p>
                            <i className="bi bi-person-fill-gear main_card_2 big_icon"></i>
                        </div>
                    </div>

                    <div className="card main_cards_3">
                        <span className="text-title main_card_3">100</span>
                        <div className="card_inner">
                            <p className="text-primary-p">Agendamentos</p>
                            <i className="bi bi-calendar-check-fill main_card_3 big_icon"></i>
                        </div>
                    </div>

                    <div className="card main_cards_4">
                        <span className="text-title main_card_4">40</span>
                        <div className="card_inner">
                            <p className="text-primary-p">Chamados</p>
                            <i className="bi bi-headset main_card_4 big_icon"></i>
                        </div>
                    </div>
                </div>

                {/* Seção que contém os gráficos de dados. */}
                <div className="charts">
                    <div className="charts_left">
                        <div className="charts_left_title">
                            <div>
                                <h1>Faturamento</h1>
                                <p>Sombrio, sc</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Chart />
                    </div>

                    <div className="charts_right">
                        <div className="charts_right_title">
                            <div>
                                <h1>Brasil</h1>
                                <p>Geral</p>
                            </div>
                            <i className="fa fa-area-chart"></i>
                        </div>

                        <div className="charts_right_cards">
                            <div className="card1">
                                <h1>Serviços</h1>
                                <p>+300</p>
                            </div>

                            <div className="card2">
                                <h1>Lucro</h1>
                                <p>R$20.500</p>
                            </div>

                            <div className="card3">
                                <h1>Clientes</h1>
                                <p>+400</p>
                            </div>

                            <div className="card4">
                                <h1>Prestadores</h1>
                                <p>+900</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;