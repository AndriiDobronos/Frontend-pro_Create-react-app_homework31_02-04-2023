import './Header.css';
import MenuItem from './MenuItem.js'

function Header() {
    return (
            <header className="Header">
                <div className="Header-header">
                    <nav className="Header-nav">
                        <ul className="Header-list">
                            <MenuItem liText = "Головна"/>
                            <MenuItem liText = "Питання"/>
                            <MenuItem liText = "Матеріали"/>
                            <MenuItem liText = "Контакти"/>
                        </ul>
                    </nav>
                </div>
            </header>
    );
}

export default Header;