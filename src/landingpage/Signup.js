import '../style/landingPage.scss';
import { Icon } from '@iconify/react';

const Signupcomponent = () => {
    return (
        <div className="container-signup">
            <header>
                <h1>Daftar Sekarang</h1>
                <h3>Buat akun gratis anda</h3>
            </header>
            <form>
                <div className='input-sign'>
                    <div className='icon-sign'><Icon icon="bxs:user" color="#9dbfaf" /></div>
                    <input placeholder='Nama Lengkap' />
                </div>
                <div className='input-sign'>
                    <div className='icon-sign'><Icon icon="ic:round-alternate-email" color="#9dbfaf" /></div>
                    <input placeholder='Alamat Email' />
                </div>
                <div className='input-sign'>
                    <div className='icon-sign'><Icon icon="uim:padlock" color="#9dbfaf" /></div>
                    <input placeholder='Kata Sandi' />
                </div>
            </form>
            <h3 className='forgot'>Lupa Kata Sandi?</h3>

            <div className='login'>
                <a>Masuk</a>
            </div>


            <div className='flex-lupa'>
                <div className='line1'></div>
                <p>ATAU MASUK DENGAN</p>
                <div className='line2'></div>
            </div>
            <div className='opsi-login'>
                <div className='medsos'>
                    <Icon icon="akar-icons:facebook-fill" color="#3b5998" width="50" height="50" />
                </div>
                <div className='medsos'><Icon icon="logos:google-gmail" width="50" height="50" /></div>
                <div className='medsos'><Icon icon="ant-design:apple-filled" color="white" width="50" height="50" /></div>
            </div>
        </div>
    );
}

export default Signupcomponent;