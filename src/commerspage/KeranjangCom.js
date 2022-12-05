import '../style/commersPage.scss';
import { Icon } from '@iconify/react';
import Merk from '../asset/merk.png';
import Kacamata from '../asset/kacamata.png';

const Keranjangcomponent = () => {
    return (
        <div className="keranjang-component">
            <header id='header1'>
                <h5>Keranjang Saya</h5>
                <p>Jumlah : 99</p>
            </header>

            <div className='flex'>
                <div id='flex-box-cart'>
                    <div className='box-cart'>
                        <p className='produkname'>Nama Produk di Keranjang</p>
                        <div id='fl-cart'>
                            <div className='prd-img'>
                                <img id='merek' src={Merk} />
                                <img id='produk' src={Kacamata} />
                            </div>
                            <div id='flx-dtl'>
                                <div className='detail-cart'>
                                    <p>SKU : 1234</p>
                                    <div className='dtl-cart'>
                                        <p className='disc'>Rp 200.000</p>
                                        <p>Rp 200.000</p>
                                    </div>
                                </div>
                                <div className='price-cart'>
                                    <a className='catatan'>Tulis catatan</a>
                                    <div className='buy-cart'>
                                        <Icon id='delete' icon="icomoon-free:bin" width="20" height="20" />

                                        <p>Jumlah</p>

                                        <Icon id='minus' icon="ant-design:minus-circle-twotone" width="20" height="20" />

                                        <span> 123 </span>

                                        <Icon id='plus' icon="ant-design:plus-circle-twotone" width="20" height="20" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='box-cart'>
                        <p className='produkname'>Nama Produk di Keranjang</p>
                        <div id='fl-cart'>
                            <div className='prd-img'>
                                <img id='merek' src={Merk} />
                                <img id='produk' src={Kacamata} />
                            </div>
                            <div id='flx-dtl'>
                                <div className='detail-cart'>
                                    <p>SKU : 1234</p>
                                    <div className='dtl-cart'>
                                        <p className='disc'>Rp 200.000</p>
                                        <p>Rp 200.000</p>
                                    </div>
                                </div>
                                <div className='price-cart'>
                                    <a className='catatan'>Tulis catatan</a>
                                    <div className='buy-cart'>
                                        <Icon id='delete' icon="icomoon-free:bin" width="20" height="20" />

                                        <p>Jumlah</p>

                                        <Icon id='minus' icon="ant-design:minus-circle-twotone" width="20" height="20" />

                                        <span> 123 </span>

                                        <Icon id='plus' icon="ant-design:plus-circle-twotone" width="20" height="20" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='box-cart'>
                        <p className='produkname'>Nama Produk di Keranjang</p>
                        <div id='fl-cart'>
                            <div className='prd-img'>
                                <img id='merek' src={Merk} />
                                <img id='produk' src={Kacamata} />
                            </div>
                            <div id='flx-dtl'>
                                <div className='detail-cart'>
                                    <p>SKU : 1234</p>
                                    <div className='dtl-cart'>
                                        <p className='disc'>Rp 200.000</p>
                                        <p>Rp 200.000</p>
                                    </div>
                                </div>
                                <div className='price-cart'>
                                    <a className='catatan'>Tulis catatan</a>
                                    <div className='buy-cart'>
                                        <Icon id='delete' icon="icomoon-free:bin" width="20" height="20" />

                                        <p>Jumlah</p>

                                        <Icon id='minus' icon="ant-design:minus-circle-twotone" width="20" height="20" />

                                        <span> 123 </span>

                                        <Icon id='plus' icon="ant-design:plus-circle-twotone" width="20" height="20" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='box-cart'>
                        <p className='produkname'>Nama Produk di Keranjang</p>
                        <div id='fl-cart'>
                            <div className='prd-img'>
                                <img id='merek' src={Merk} />
                                <img id='produk' src={Kacamata} />
                            </div>
                            <div id='flx-dtl'>
                                <div className='detail-cart'>
                                    <p>SKU : 1234</p>
                                    <div className='dtl-cart'>
                                        <p className='disc'>Rp 200.000</p>
                                        <p>Rp 200.000</p>
                                    </div>
                                </div>
                                <div className='price-cart'>
                                    <a className='catatan'>Tulis catatan</a>
                                    <div className='buy-cart'>
                                        <Icon id='delete' icon="icomoon-free:bin" width="20" height="20" />

                                        <p>Jumlah</p>

                                        <Icon id='minus' icon="ant-design:minus-circle-twotone" width="20" height="20" />

                                        <span> 123 </span>

                                        <Icon id='plus' icon="ant-design:plus-circle-twotone" width="20" height="20" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='box-detail1'>
                    <div className='head-detail'>
                        <p>Masukan Kode Voucher</p>
                        <input className='detail-input' type='text' placeholder='Kode Anda' />
                    </div>
                    <div className='body-detail'>
                        <h5>Ringkasan Belanja</h5>
                        <div className='flex-detail'>
                            <div id='block-dtl'>
                            <p>Total Harga <span>(5 Barang)</span></p>
                            <p>Total Harga Diskon Barang</p>
                            <p>- Include Ongkir (22 Ribu) -</p>
                            </div>
                            <div id='block-dtl'>
                            <p className='price-det'>Rp XX0.000</p>
                            <p className='price-det'>Rp XX0.000</p>
                            <p className='price-det'>Rp 22.000</p>
                            </div>
                            
                            
                        </div>
                        <div className='harga-detail'>
                            <h5>Total Harga</h5>
                            <span>Rp 220.000</span>
                        </div>
                        <div className='btn-cart'>
                            <button type='button'>Beli <spa>(3)</spa></button>
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
    )
}

export default Keranjangcomponent;