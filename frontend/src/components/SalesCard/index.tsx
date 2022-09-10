import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
    return (
        <div id="meta-card">
            <h2>Vendas</h2>
            <div>
                <div className="input-container">
                    <input className="input1" type="text" />
                </div>
                <div className="input-container">
                    <input className="input1" type="text" />
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

export default SalesCard