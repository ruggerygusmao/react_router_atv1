import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {

    return(
        <nav>
            <ul className="nav-bar">
                <li><Link className="item-nav" to="/">Home</Link></li>
                <li><Link className="item-nav" to="/musica">Musica</Link></li>
                <li><Link className="item-nav" to="/cidade">Cidade</Link></li>
            </ul>
        </nav>
    )
}
export default Nav;