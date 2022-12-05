import '../style/commersPage.scss';

const Logoutcomponent = () => {
    return(
        <div className="logout-component">
            <p>Apakah anda yakin untuk keluar?</p>
            <div className='yesno'>
                <button className='ya'>Ya</button>
                <button className='tdk'>Tidak</button>
            </div>
        </div>
    )
}

export default Logoutcomponent;