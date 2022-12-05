import '../style/landingPage.scss';
import Frame from '../asset/glasses-produk.png';
import Lensa from '../asset/lensa-produk.png';
import Softlens from '../asset/softlens-produk.png';
import Aksesoris from '../asset/aksesoris-produk.png';

const ProdukComponents = () => {
    return (
        <div className="container-produk">

            <div className='title'><h1>Produk Kami</h1></div>

            <div className='grid'>
                <div className='box-container'>
                    <div className='title-produk'>
                        <p>Frame Kacamata</p>
                    </div>
                    <div className='lonjong' />
                    <div className='box-produk'>
                        <img src={Frame} />
                        <div>
                            Teknologi memberikan manfaat
                            yang luar biasa dalam kehidupan.
                            Kita menggunakannya hampir setiap
                            hari.
                        </div>
                    </div>
                </div>
                <div className='box-container'>
                    <div className='title-produk'>
                        <p>Lensa</p>
                    </div>
                    <div className='lonjong' />
                    <div className='box-produk'>
                        <img src={Lensa} />
                        <div>
                            Teknologi memberikan manfaat
                            yang luar biasa dalam kehidupan.
                            Kita menggunakannya hampir setiap
                            hari.
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid'>
                <div className='box-container'>
                    <div className='title-produk'>
                        <p>Soft Lens</p>
                    </div>
                    <div className='lonjong' />
                    <div className='box-produk'>
                        <img src={Softlens} />
                        <div>
                            Teknologi memberikan manfaat
                            yang luar biasa dalam kehidupan.
                            Kita menggunakannya hampir setiap
                            hari.
                        </div>
                    </div>
                </div>
                <div className='box-container'>
                    <div className='title-produk'>
                        <p>Aksesoris</p>
                    </div>
                    <div className='lonjong' />
                    <div className='box-produk'>
                        <img src={Aksesoris} />
                        <div>
                            Teknologi memberikan manfaat
                            yang luar biasa dalam kehidupan.
                            Kita menggunakannya hampir setiap
                            hari.
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default ProdukComponents;