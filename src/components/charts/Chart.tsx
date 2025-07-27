import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

interface DataPoint {
    name: string;
    vendas: number;
    lucro: number;
    visitantes: number;
}

const Chart: React.FC = () => {
    const data: DataPoint[] = [
        { name: 'Jan', vendas: 4000, lucro: 2400, visitantes: 2400 },
        { name: 'Fev', vendas: 3000, lucro: 1398, visitantes: 2210 },
        { name: 'Mar', vendas: 2000, lucro: 9800, visitantes: 2290 },
        { name: 'Abr', vendas: 2780, lucro: 3908, visitantes: 2000 },
        { name: 'Mai', vendas: 1890, lucro: 4800, visitantes: 2181 },
        { name: 'Jun', vendas: 2390, lucro: 3800, visitantes: 2500 },
        { name: 'Jul', vendas: 3490, lucro: 4300, visitantes: 2100 },
    ];

    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="vendas" stroke="#8884d8" name="Vendas" />
                    <Line type="monotone" dataKey="lucro" stroke="#82ca9d" name="Lucro" />
                    <Line type="monotone" dataKey="visitantes" stroke="#ffc658" name="Visitantes" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;