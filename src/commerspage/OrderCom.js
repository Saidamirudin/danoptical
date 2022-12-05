import '../style/commersPage.scss';

const Outordercomponent = () => {
    return (
        <div className="order-component">
            <header>
                <h5>Daftar Transaksi</h5>
            </header>
            <div className='flex'>
                <div className='box-order'>
                    <div className='blk-order'>
                        <h5>Nama Produk Pesanan</h5>
                        <div className='box-total'>
                            <p>Total Item</p>
                            <span>(3)</span>
                        </div>
                    </div>
                    <div className='detail-flex'>
                        <p className='time'>2022-08-29 09:15:47</p>
                        <p className='price'>Rp XX0.000</p>
                    </div>
                    <div className='detail-flex'>
                        <p className='kode'>Kode transaksi</p>
                        <p className='code'>16us88Lwp9yDo</p>
                    </div>
                </div>
                <div className='box-info'>
                    <button id='danger'>Konfirmasi Pembayaran</button>
                </div>
            </div>
            <div className='flex'>
                <div className='box-order'>
                    <div className='blk-order'>
                        <h5>Nama Produk Pesanan</h5>
                        <div className='box-total'>
                            <p>Total Item</p>
                            <span>(3)</span>
                        </div>
                    </div>
                    <div className='detail-flex'>
                        <p className='time'>2022-08-29 09:15:47</p>
                        <p className='price'>Rp XX0.000</p>
                    </div>
                    <div className='detail-flex'>
                        <p className='kode'>Kode transaksi</p>
                        <p className='code'>16us88Lwp9yDo</p>
                    </div>
                </div>
                <div className='box-info '>
                    <button id='warning'>Pesanan Diproses</button>
                </div>
            </div>
            <div className='flex'>
                <div className='box-order'>
                    <div className='blk-order'>
                        <h5>Nama Produk Pesanan</h5>
                        <div className='box-total'>
                            <p>Total Item</p>
                            <span>(3)</span>
                        </div>
                    </div>
                    <div className='detail-flex'>
                        <p className='time'>2022-08-29 09:15:47</p>
                        <p className='price'>Rp XX0.000</p>
                    </div>
                    <div className='detail-flex'>
                        <p className='kode'>Kode transaksi</p>
                        <p className='code'>16us88Lwp9yDo</p>
                    </div>
                </div>
                <div className='box-info'>
                    <button id='done'>Pesanan Selesai</button>
                </div>
            </div>
        </div>
    )
}

export default Outordercomponent;