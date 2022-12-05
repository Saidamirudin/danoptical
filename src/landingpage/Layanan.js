import '../style/landingPage.scss';

const Layanancomponent = () => {
    return (
        <div className="container-layanan">
            <header>
                <h1>Layanan Kami</h1>
            </header>
            <ul>
                <li><p>Periksa mata GRATISS...</p></li>
                <li><p>Menerima resep dokter </p></li>
                <li><p>Tersedia banyak pilihan frame & lensa sesuai kebutuhan
                    anda</p></li>
            </ul>
            <div className='diskon-view'>
                <a>Disc Up to 50%</a>
            </div>
        </div>
    )
}

export default Layanancomponent;