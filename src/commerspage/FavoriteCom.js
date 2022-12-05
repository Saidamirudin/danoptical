import '../style/commersPage.scss';
import { Icon } from '@iconify/react';
import Merk from '../asset/merk.png';
import Kacamata from '../asset/kacamata.png';

const Favoritecomponent = () => {
    return(
        <div className="view-component">
            <div className='carousel'>
            <div className="head-beranda">
                    <p>Produk Favorite</p>
                </div>
                <div className='flex'>

                    <div className="carousel-produk">
                        <div className="produk-card">
                            <div className="card-foto">
                                <img className='mrk' src={Merk} alt="merk" />
                                <img className='prd' src={Kacamata} alt="produk" />
                            </div>
                            <div className="detail">
                                <div className="namaproduk">
                                    <p>Stok 5</p>
                                    <div className="produk-det">
                                        <h5>Nama Produk</h5>
                                        <div className='love'>
                                            <Icon icon="ic:outline-favorite" color="#d44c3d" width="20" height="20" />
                                        </div>
                                    </div>
                                </div>
                                <div className="hargaproduk">
                                    <div className="rupiah">
                                        <p>Harga:</p>
                                        <h5>Rp 220.000</h5>
                                    </div>
                                    <div className="btn-beli">
                                        <a>Beli Sekarang</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-produk">
                        <div className="produk-card">
                            <div className="card-foto">
                                <img className='mrk' src={Merk} alt="merk" />
                                <img className='prd' src={Kacamata} alt="produk" />
                            </div>
                            <div className="detail">
                                <div className="namaproduk">
                                    <p>Stok 5</p>
                                    <div className="produk-det">
                                        <h5>Nama Produk</h5>
                                        <div className='love'>
                                            <Icon icon="ic:outline-favorite" color="#d44c3d" width="20" height="20" />
                                        </div>
                                    </div>
                                </div>
                                <div className="hargaproduk">
                                    <div className="rupiah">
                                        <p>Harga:</p>
                                        <h5>Rp 220.000</h5>
                                    </div>
                                    <div className="btn-beli">
                                        <a>Beli Sekarang</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-produk">
                        <div className="produk-card">
                            <div className="card-foto">
                                <img className='mrk' src={Merk} alt="merk" />
                                <img className='prd' src={Kacamata} alt="produk" />
                            </div>
                            <div className="detail">
                                <div className="namaproduk">
                                    <p>Stok 5</p>
                                    <div className="produk-det">
                                        <h5>Nama Produk</h5>
                                        <div className='love'>
                                            <Icon icon="ic:outline-favorite" color="#d44c3d" width="20" height="20" />
                                        </div>
                                    </div>
                                </div>
                                <div className="hargaproduk">
                                    <div className="rupiah">
                                        <p>Harga:</p>
                                        <h5>Rp 220.000</h5>
                                    </div>
                                    <div className="btn-beli">
                                        <a>Beli Sekarang</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Favoritecomponent;