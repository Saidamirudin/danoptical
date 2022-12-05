import SidebarCom from '../commerspage/fixcomponent/SidebarCom';
import NavbarCom from '../commerspage/fixcomponent/NavbarCom';
import BerandaCom from '../commerspage/BerandaCom';
import DetailCom from '../commerspage/DetailCom';
import ProdukViewCom from '../commerspage/ProdukViewCom';
import KategoriViewCom from '../commerspage/KategoriViewCom';
import LogoutCom from '../commerspage/LogoutCom';
import KeranjangCom from '../commerspage/KeranjangCom';
import KeranjangOutCom from '../commerspage/KeranjangOutCom';
import OrderCom from '../commerspage/OrderCom';
import OrderOut from '../commerspage/OrderOutCom';
import FavoriteCom from '../commerspage/FavoriteCom';
import ProfilCom from '../commerspage/ProfilCom';
import ProfilDetCom from '../commerspage/ProfilDetCom';

const CommersPage = () => {
    return (
        <div className='commerspage'>
            <LogoutCom />
            <SidebarCom />
            <NavbarCom />
            {/* <BerandaCom /> */}
            {/* <DetailCom /> */}
            {/* <ProdukViewCom /> */}
            {/* <KategoriViewCom /> */}
            {/* <KeranjangCom /> */}
            {/* <KeranjangOutCom /> */}
            {/* <OrderCom /> */}
            {/* <OrderOut /> */}
            {/* <FavoriteCom /> */}
            {/* <ProfilCom/> */}
            <ProfilDetCom/>
        </div>
    )
}

export default CommersPage;