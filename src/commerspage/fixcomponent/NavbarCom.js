import '../../style/commersPage.scss';
import { Icon } from '@iconify/react';
import Profil from '../../asset/said.jpg';

const Navcom = () => {
    return (
        <div className="container-navcom">
            <div className='info-profil'>
                <div className='foto'>
                    <img src={Profil} />
                </div>
                <div className='text-selamat'>
                    <div className='selamat'>Selamat pagi, Amirudin</div>
                    <div className='sunting'>Selesaikan Profil Anda, <a>Sunting Sekarang</a></div>
                </div>
            </div>
            <div className='navright'>
                <div className="search">
                    <button type="submit" className="searchButton">
                        <Icon icon="fa:search" />
                    </button>
                    <input type="text" className="searchTerm" placeholder="Cari..." />
                </div>
                <div className='logout'>
                <Icon icon="ri:logout-box-line" color="#03ac0e" width="30" height="30" />
                </div>
            </div>
        </div>
    )
}

export default Navcom;