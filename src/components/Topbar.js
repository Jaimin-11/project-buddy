import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useState } from 'react';

import Links from './Topbar/Links';

import './Topbar.style.css';

function Topbar(props) {

    const [showMenu, setShowMenu] = useState(true);
    const menu = () => {
        showMenu ? setShowMenu(false) : setShowMenu(true);
    }
    console.log(showMenu);
    return (
        <div className='topbar-container'>
            <p id="AppLogoName">Project buddy</p>
            <button className={showMenu === true ? "menu-button menu-button-active" : "menu-button"} onPointerDown={menu}>
                {showMenu === true ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
            </button>
            {showMenu === true ? <Links /> : null}
            <div className='topbar-account'><AccountCircleIcon fontSize="large"/><p>Account</p></div>
        </div>
    )
}

export default Topbar;