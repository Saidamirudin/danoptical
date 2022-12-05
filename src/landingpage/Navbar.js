import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from "react-router-dom";
import '../style/landingPage.scss';

const Navigationbar = () => {
    return (
        <div className="navbar-container">
            <nav>
                <div className="link-cart">
                    <Icon icon="bi:cart" width="30" height="30" />
                </div>
                <div className='login'>
                    <a><Link to="/login">Masuk</Link></a>
                </div>
                <div className='daftar'>
                    <a><Link to="/signup">Daftar</Link></a>
                </div>
                <div className="search">
                    <button type="submit" className="searchButton">
                        <Icon icon="fa:search" />
                    </button>
                    <input type="text" className="searchTerm" placeholder="Cari..." />
                </div>
            </nav>
        </div>
    );
}

export default Navigationbar;
