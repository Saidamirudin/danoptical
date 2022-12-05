import '../style/commersPage.scss';

const Profildetail = () => {
    return(
        <div className='setting-component'>
            <header>
                <button >Biodata Diri</button>
                <button className='active'>Daftar Alamat</button>
            </header>

            <div className='list-profil'>
                    <h5>Ubah Biodata Diri</h5>
                        <form>
                            <label>Label Alamat</label>
                            <input type='text' placeholder='Nur Said Amirudin'></input>
                            <button>Ubah</button>
                        </form>
                        <form>
                            <label>Alamat Lengkap</label>
                            <input type='text' placeholder='Nur Said Amirudin'></input>
                            <button>Ubah</button>
                        </form>
                        <form>
                            <label>Catatan untuk kurir (opsional)</label>
                            <input type='text' placeholder='Nur Said Amirudin'></input>
                            <button>Ubah</button>
                        </form>
                        <form>
                            <label>Nama Penerima</label>
                            <input type='text' placeholder='Nur Said Amirudin'></input>
                            <button>Ubah</button>
                        </form>
                        <form>
                            <label>Nomor HP</label>
                            <input type='text' placeholder='Nur Said Amirudin'></input>
                            <button>Ubah</button>
                        </form>
                    </div>
        </div>
    )
}

export default Profildetail;