import '../../style/commersPage.scss';
import Logo from '../../asset/logo.png';
import { Icon } from '@iconify/react';

const Sidebarcomponent = () => {
    return (
        <div className="container-sidebar">
            <div className='logo-sidebarcom'>
                <img src={Logo} />
            </div>
        
            <nav className="nav-com">
                <ul>
                    <li className='side-link'>
                    <Icon icon="el:home-alt" color="#03ac0e" width="20" height="20" />
                        <a>Beranda</a>
                    </li>
                    <li class="dropdown">
                    <Icon icon="radix-icons:dropdown-menu" color="#03ac0e" width="20" height="20" />
                        <a className='dropbtn'>Kategori Produk</a>
                        <ul id='myDropdown' className='dropdown-content'>
                            <a href="#">Menu Frame</a>
                            <a href="#">Menu Lensa</a>
                            <a href="#">Menu Softlens</a>
                        </ul>
                    </li>
                    <li className='side-link'>
                    <Icon icon="akar-icons:shipping-box-v2" color="#03ac0e" width="20" height="20" />
                        <a>Paker Bundling</a>
                    </li>
                </ul>
                <div className='menu-bawah'>Akun Saya</div>
                <ul>
                    <li className='side-link'>
                    <Icon icon="el:shopping-cart" color="#03ac0e" width="20" height="20" />
                        <a>Keranjang Saya</a>
                        <div className='notif'>2</div>
                    </li>
                    <li className='side-link'>
                    <Icon icon="fontisto:shopping-bag-1" color="#03ac0e" width="20" height="20" />
                        <a>Daftar Order</a>
                        <div className='notif'>1</div>
                    </li>
                    <li className='side-link'>
                    <Icon icon="carbon:favorite-filled" color="#03ac0e" width="20" height="20" />
                        <a>Produk Favorit</a>
                        <div className='notif'>3</div>
                    </li>
                    <li className='side-link'>
                    <Icon icon="icon-park-twotone:setting-two" color="#03ac0e" width="20" height="20" />
                        <a>Pengatura Akun</a>

                    </li>
                </ul>
                <div className='mode'>
                <Icon icon="ic:baseline-light-mode" color="#03ac0e" width="20" height="20" />
                    <a>Mode Cahaya</a>
                    <div className='switch-mode'>
                        <div className='bulet'></div>
                    </div>
                </div>
            </nav>
            <div className='footer'>
                    <p>&copy; Copyright 2017 - 2022 D.A.N Optical</p>
            </div>
        </div>
    )
}

export default Sidebarcomponent;