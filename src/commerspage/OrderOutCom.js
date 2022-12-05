import '../style/commersPage.scss';
import { Icon } from '@iconify/react';

const Konfirmasicomponent = () => {
    return (
        <div className="konfirmasi-component">
            <header>
                <h5>Konfirmasi Transaksi</h5>
            </header>
            <form className='form-grub' action='post'>
                <div id='flk-form'>
                    <div className='inputgrub'>
                        <label>Kode Order</label>
                        <br />
                        <input type='text' placeholder='6us88Lwp9yDo' disabled></input>
                    </div>
                    <div className='inputgrub'>
                        <label>Rekening Tujuan</label>
                        <br />
                        <input type='text' placeholder='BANK BRI | 692601014916536' disabled></input>
                    </div>
                    <div className='inputgrub'>
                        <label>Informasi Pembayaran</label>
                        <br />
                        <input type='text' placeholder='Nama Pemilik Rekening / Sumber Dana'></input>
                    </div>
                    <div className='inputgrub'>
                        <label>Tanggal Pembayaran</label>
                        <br />
                        <input type='date'></input>
                    </div>

                    <button type='button' className='submit-order'>Kirim</button>
                </div>


                <p>Silahkan melanjutkan konfirmasi berupa bukti Transfer ke CS
                    <br/>- Click Icon Whatsapp Dibawah -</p>
                <div className='link-wa'>
                    <Icon href='#' icon="logos:whatsapp-icon" width="40" height="40" />
                </div>
            </form>
        </div>
    )
}

export default Konfirmasicomponent;