import '../style/landingPage.scss';
import { Icon } from '@iconify/react';

const Hubungicomponent = () => {
    return (
        <div className="container-contact">
            <header>
                <h1>Hubungi Kami</h1>
            </header>
            <div className='flex-contact'>
                <form method='post'>
                    <div className='input-form'>
                        <div className='icon-form'>@</div>
                        <input placeholder='Masukan Nama Anda' />
                    </div>
                    <div className='input-form'>
                        <div className='icon-form'>@</div>
                        <input placeholder='Masukan Email Anda' />
                    </div>
                    <textarea name="" id="" placeholder='Masukan Pesan Anda'></textarea>
                    
                </form>
                <div className='medsos'>
                    <div className='box-medsos'>
                        <i><Icon icon="mdi:gmail" width='40' height='40' color="#03ac0e" /></i>
                        <p>Ekoh471@gmail.com</p>
                    </div>
                    <div className='box-medsos'>
                        <i><Icon icon="dashicons:whatsapp"  width='40' height='40' color="#03ac0e"  /></i>
                        <p>+62 8822 771 2434</p>
                    </div>
                    <div className='box-medsos'>
                        <i><Icon icon="carbon:phone-filled"  width='40' height='40' color="#03ac0e" /></i>
                        <p>0882 2771 2434</p>
                    </div>
                </div>

            </div>
            <div className='button-pesan'>
                <a>Kirim</a>
            </div>
        </div>
    )
}

export default Hubungicomponent;