import logo from '../../assets/img/logo.svg';

import './styles.css';

function Header() {
    return (
        <header>
            <div id="navbar">
                <img src={logo} alt="Meta Project" />
                    <h1>Meta Project</h1>
                    <p>
                        Desenvolvido por 
                        <a href="https://github.com/jntneves" target="_blank"> @jntneves</a>
                    </p>
            </div>
        </header>
    )
}

export default Header;