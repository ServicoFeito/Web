import Chart from '../charts/Chart';
import './Main.css';

const Main = () => {
    return (
        <main>
            <div className="main_container">
                <div className="main_title">
                    <div className="main_greeting">
                        <h1>Dashboard</h1>
                    </div>
                </div>

                <div className="main_cards">
                    <div className="card main_cards_1">
                            <span className="text-title main_card_1">578</span>
                        <div className="card_inner">
                            <p className="text-primary-p">Clientes</p>
                           <i className="bi bi-currency-dollar text-lightblue big_icon"></i>
                        </div>
                    </div>

                     <div className="card main_cards_2">
                            <span className="text-title main_card_2">578</span>
                        <div className="card_inner">
                            <p className="text-primary-p">Clientes</p>
                           <i className="bi bi-currency-dollar text-lightblue big_icon"></i>
                        </div>
                    </div>

                     <div className="card main_cards_3">
                            <span className="text-title main_card_3">578</span>
                        <div className="card_inner">
                            <p className="text-primary-p">Clientes</p>
                           <i className="bi bi-currency-dollar text-lightblue big_icon"></i>
                        </div>
                    </div>

                     <div className="card main_cards_4">
                            <span className="text-title main_card_4">578</span>
                        <div className="card_inner">
                            <p className="text-primary-p">Clientes</p>
                           <i className="bi bi-currency-dollar text-lightblue big_icon"></i>
                        </div>
                    </div>

                </div>

                <div className="charts">
                    <div className="charts_left">
                        <div className="charts_left_title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Ubatuba, São Paulo, BR</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Chart />
                    </div>

                    <div className="charts_right">
                        <div className="charts_right_title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Ubatuba, São Paulo, BR</p>
                            </div>
                            <i className="fa fa-area-chart"></i>
                        </div>

                        <div className="charts_right_cards">
                            <div className="card1">
                                <h1>Lucro</h1>
                                <p>R$2500</p>
                            </div>

                             <div className="card2">
                                <h1>Lucro</h1>
                                <p>R$2500</p>
                            </div>

                             <div className="card3">
                                <h1>Lucro</h1>
                                <p>R$2500</p>
                            </div>

                             <div className="card4">
                                <h1>Lucro</h1>
                                <p>R$2500</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;