import '../style/commersPage.scss';
import Profil from '../asset/profil.jpg';

const Settingcomponent = () => {
    return (
        <div className="setting-component">
            <header>
                <button className='active'>Biodata Diri</button>
                <button>Daftar Alamat</button>
            </header>

            <div className='flex-profil'>
                <div className='foto-ket'>
                    <img src={Profil} alt='foto-profil'></img>
                    <button>Pilih Foto</button>
                    <p>Besar file: maksimum 10.000.000
                        bytes (10 Megabytes). Ekstensi file
                        yang diperbolehkan: .JPG .JPEG .PNG
                    </p>
                </div>
                <div className='detail-profil'>
                    <div className='list-profil'>
                        <h5>Ubah Biodata Diri</h5>
                        <form>
                            <label>Nama</label>
                            <input type='text' placeholder='Nur Said Amirudin'></input>
                            <button>Ubah</button>
                        </form>
                        <form>
                            <label>Tanggal Lahir</label>
                            <input type='date'></input>
                            <button>Ubah</button>
                        </form>
                        <form>
                            <label>Jenis Kelamin</label>
                            <input type='text' placeholder='Nur Said Amirudin'></input>
                            <button>Ubah</button>
                        </form>
                    </div>
                    <div className='list-profil'>
                    <h5>Ubah Biodata Diri</h5>
                        <form>
                            <label>No HP</label>
                            <input type='text' placeholder='Nur Said Amirudin'></input>
                            <button>Ubah</button>
                        </form>
                        <form>
                            <label>Email</label>
                            <input type='email' placeholder='Nur Said Amirudin'></input>
                            <button>Ubah</button>
                        </form>
                    </div>
                    <div className='list-profil'>
                    <h5>Ubah Biodata Diri</h5>
                        <form>
                            <label>BANK</label>
                            <input type='text' placeholder='Nur Said Amirudin'></input>
                            <button>Ubah</button>
                        </form> <form>
                            <label>Nomor Rekening</label>
                            <input type='text' placeholder='Nur Said Amirudin'></input>
                            <button>Ubah</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settingcomponent;