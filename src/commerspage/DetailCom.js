import '../style/commersPage.scss';
import { Icon } from '@iconify/react';
import Merk from '../asset/merk.png';
import Kacamata from '../asset/kacamata.png';

const Detailcomponent = () => {
    return (
        <div className="container-detail">
            <div className='detil-carousel'>
                <div className="head-beranda">
                    <p>Detail Produk</p>
                </div>

                <div className='flex-detil'>
                    <div className='box-detail-image'>
                        <div className='main-img'>
                            <img className='mrk' src={Merk} alt="merk" />
                            <img className='prd' src={Kacamata} alt="produk" />
                        </div>
                        <div className='small-img'>
                            <div className='prev-icon'>
                                <Icon icon="ic:outline-navigate-next" color="#03ac0e" width="30" height="30" rotate={2} />
                            </div>
                            <div className='smal'>
                                <img className='prd-sml' src={Kacamata} alt="produk" />
                                <img className='prd-sml' src={Kacamata} alt="produk" />
                                <img className='prd-sml' src={Kacamata} alt="produk" />
                                <img className='prd-sml' src={Kacamata} alt="produk" />
                            </div>
                            <div className='prev-icon'>
                                <Icon icon="ic:outline-navigate-next" color="#03ac0e" width="30" height="30" />
                            </div>
                        </div>
                    </div>
                    <div className='produk-detail'>
                        <div className='header-det'>
                            <p>Promo </p>
                            <p className='promo'>Teks Promo</p>
                        </div>
                        <div className='main-det'>
                            <h5>Nama Produk</h5>
                            <p>Tipe Produk</p>
                            <div className='price-det'>
                                <p>Harga:</p>
                                <h5 className='potongan'>Rp 220.000</h5>
                                <h5 className='diskon'>Rp 220.000</h5>
                            </div>
                        </div>
                        <div className='count-det'>
                            <p>Jumlah</p>
                            <div className='count'>
                                <Icon id='minus' icon="ant-design:minus-circle-twotone" width="20" height="20" />
                                <p> 123 </p>
                                <Icon id='plus' icon="ant-design:plus-circle-twotone" width="20" height="20" />
                            </div>
                        </div>
                        <div className='button-sale'>
                            <button id='beli'>Beli Sekarang</button>
                            <button id='keranjang'>+ Keranjang</button>
                        </div>
                    </div>
                    <div className='box-detail'>
                        <div className='header-det'>
                            <p>Detail</p>
                            <p>Info Penting</p>
                        </div>
                        <div className='detail-lanjut'>
                            <p>Kategori :</p>
                            <span>Nama Katgori</span>
                        </div>
                        <div className='detail'>
                            <p>📍Gender :     Pria/ Wanita (Unisex).
                                📍Bahan :     metal+TR90
                                📍Untuk ukuran produk yang tertera menggunakan pengukuran manual jadi kurang lebih selisihnya +- 5 mm .berada dalam kisaran normal.</p>
                            <span >Lihat Selengkapnya</span>
                        </div>
                        <h6>Pengiriman</h6>
                        <div className='kirim'>
                            <div className='pengiriman-det'>
                                <Icon icon="bytesize:location" color="#A6A6A6" width="20" height="20" />
                                <p>Dikirim Dari</p>
                                <span>Kulon Progo,
                                    Yogyakarta</span>
                            </div>

                            <div className='pengiriman-det'>
                                <Icon icon="fa6-solid:truck" color="#A6A6A6" width="20" height="20" />
                                <p>Ongkir Regular</p>
                                <span>22 Rb</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='rekomendasi'>
                <div className="head-beranda">
                    <p>Rekomendasi Produk</p>
                </div>

                <div className='flex'>
                    <div className='next-carousel'>
                        <Icon id='next-prev' icon="carbon:previous-filled" color="#03ac0e" width="40" height="40" />
                    </div>

                    <div className="carousel-produk-prm">
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
                                        <h5 className='price-diskon'>Rp 220.000</h5>
                                    </div>
                                    <div className="btn-beli">
                                        <a>Beli Sekarang</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-produk-prm">
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
                                        <h5 className='price-diskon'>Rp 220.000</h5>
                                    </div>
                                    <div className="btn-beli">
                                        <a>Beli Sekarang</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-produk-prm">
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
                                        <h5 className='price-diskon'>Rp 220.000</h5>
                                    </div>
                                    <div className="btn-beli">
                                        <a>Beli Sekarang</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='next-carousel'>
                        <Icon id='next-prev' icon="carbon:next-filled" color="#03ac0e" width="40" height="40" />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Detailcomponent;