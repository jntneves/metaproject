import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton';
import './styles.css';

function SalesCard() {

    const [minDate, setMinDate] = useState(new Date());
    const [maxDate, setMaxDate] = useState(new Date());

    useEffect(() => {
        axios.get("http://localhost:8080/sales").then(response => {
            console.log(response.data);
        })
    }, []);

    return (
        <div id="meta-card">
            <h2>Vendas</h2>
            <div>
                <div className="input-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="input1"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="input-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="input1"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>

                <div>
                    <table className="table-container">
                        <thead>
                            <tr>
                                <th className="hide992">ID</th>
                                <th className="hide576">Data</th>
                                <th>Vendedor</th>
                                <th className="hide992">Visitas</th>
                                <th className="hide992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="hide992">#722</td>
                                <td className="hide576">27/07/2022</td>
                                <td>João</td>
                                <td className="hide992">19</td>
                                <td className="hide992">13</td>
                                <td>R$ 37500,00</td>
                                <td>
                                    <div className="red-button-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="hide992">#722</td>
                                <td className="hide576">27/07/2022</td>
                                <td>Maria</td>
                                <td className="hide992">19</td>
                                <td className="hide992">13</td>
                                <td>R$ 37500,00</td>
                                <td>
                                    <div className="red-button-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="hide992">#722</td>
                                <td className="hide576">27/07/2022</td>
                                <td>Pedro</td>
                                <td className="hide992">19</td>
                                <td className="hide992">13</td>
                                <td>R$ 37500,00</td>
                                <td>
                                    <div className="red-button-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default SalesCard;