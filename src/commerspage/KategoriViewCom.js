import '../style/commersPage.scss';
import { Icon } from '@iconify/react';
import Merk from '../asset/merk.png';
import Kacamata from '../asset/kacamata.png';

const Viewkategoricom = () => {
    return(
        <div className="view-component">
            <div className='carousel'>
                <div className='box-kategori'>
                    <Icon id='prev' icon="carbon:previous-outline" color="#03ac0e" width="30" height="30" />
                    <div id='kategori'>Kategori Produk</div>
                    <div id='kategori'>Kategori Produk</div>
                    <div id='kategori'>Kategori Produk</div>
                    <div id='kategori'>Kategori Produk</div>
                    <div id='kategori'>Kategori Produk</div>

                    <Icon id='next' icon="carbon:next-outline" color="#03ac0e" width="30" height="30" />
                </div>
                <div className="head-beranda">
                    <p>View All Produk (Sesuai Kategori)</p>
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
    );
}

export default Viewkategoricom;