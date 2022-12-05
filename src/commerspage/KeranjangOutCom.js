import '../style/commersPage.scss';
import { Icon } from '@iconify/react';
import Merk from '../asset/merk.png';
import Kacamata from '../asset/kacamata.png';
import Bank from '../asset/BRI.png';

const Keranjangoutcomponent = () => {
    return (
        <div className="keranjang-component">
            <header id='header2'>
                <h5>Terima kasih, Amirudin telah membeli produk kacamata di D.A.N Optical</h5>
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

                <div className='box-detail2'>
                    <h5>Total Harga Yang harus
                        Dibayar Saat ini</h5>
                    <p className='ket'>Rp XX0.000</p>
                    <h5>Kode Transaksi Anda</h5>
                    <p className='ket'>16us88Lwp9yDo</p>
                    <div className='detail-bayar'>
                        <p className='desc'>TOTAL HARGA YANG TERTERA DI ATAS SUDAH
                            TERMASUK ONGKOS KIRIM SEBESAR RP27.000</p>
                        <div className='bank'>
                            <img src={Bank} alt='bank-bri'></img>
                            <p>Bank BRI - 692601014916536
                                <br />a/n. EKO HARYANTO</p>
                        </div>
                        <p className='desc'>Orderan anda Akan Segera kami proses 1x24 Jam
                            Setelah Anda Melakukan Pembayaran ke ATM kami
                            dan menyertakan informasi pribadi yang melakukan
                            pembayaran seperti Nama Pemilik Rekening / Sumber
                            Dana, Tanggal Pembayaran, Metode Pembayaran
                            dan Jumlah Bayar.</p>
                    </div>
                    <div className='btn-cart'>
                        <button type='button'>Lanjut Pembayaran</button>
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

export default Keranjangoutcomponent;