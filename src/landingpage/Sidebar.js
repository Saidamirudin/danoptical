import { Link } from "react-router-dom";
import React from 'react';
import Logo from "../asset/logo.png";
import '../style/landingPage.scss';

const Sidebarcomponent = () => {
    return (
        <div className="sidebar-container">
            <div className='logo'>
                <img src={Logo} />
            </div>
            <nav className="nav">
                <ul>
                    <div className="list">
                        <div className="bullet" />
                        <li href="container-beranda"><Link to="/">Beranda</Link></li>
                    </div>
                    <div className="list">
                        <div className="bullet" />
                        <li><Link to="/produk">Produk</Link></li>
                    </div>
                    <div className="list">
                        <div className="bullet" />
                        <li><Link to="/layanan">Layanan</Link></li>
                    </div>
                    <div className="list">
                        <div className="bullet" />
                        <li><Link to="/contact">Hubungi</Link></li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebarcomponent;