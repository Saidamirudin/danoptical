import '../style/landingPage.scss';
import Imgberanda from '../asset/kacamata.png';

const Berandacomponent = () => {
    return (
        <div className='container-beranda'>
            <div className='title'>
                <h1>Cari Kacamata?</h1>
            </div>
            <div className='content'>
                <div className='description'>
                    D.A.N Optical adalah toko online yang
                    memberikan jasa pemesanan
                    Kacamata Minus, Plus, or Cylinder.
                    Menggunakan frame standar optik
                    serta lensa standar kesehatan. Yang
                    tentunya selalu memberikan garansi di
                    setiap pembeliannya.
                </div>
                <div className='img-beranda'>
                    <img src={Imgberanda}/>
                </div>
            </div>
            <div className='button-belanja'>
                    <a>Belanja Sekarang</a>
            </div>
        </div>
    )
}

export default Berandacomponent;