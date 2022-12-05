import "../style/landingPage.scss";
import { Router,  Route, Routes } from "react-router-dom";
import Sidebar from '../landingpage/Sidebar';
import Navbar from '../landingpage/Navbar';
import Footer from '../landingpage/Footer';
import Berandacomponent from '../landingpage/Beranda';
import Layanancomponent from '../landingpage/Layanan';
import Hubungicomponent from '../landingpage/Contact';
import Logincomponent from '../landingpage/Login';
import Signupcomponent from '../landingpage/Signup';

const PageLanding = () => {
    return (
        <div className='landingpage'>
            <Router>
                <div className='app-fix-menu'>
                    <Sidebar />
                    <Navbar />
                    <Footer />
                </div>
                <Routes>
                    <div className='app-content'>
                        <Route path='/' exact component={Berandacomponent} />
                        <Route path='/layanan' exact component={Layanancomponent} />
                        <Route path='/contact' exact component={Hubungicomponent} />
                        <Route path='/login' exact component={Logincomponent} />
                        <Route path='/signup' exact component={Signupcomponent} />
                    </div>
                </Routes>
            </Router>
        </div>
    )
}

export default PageLanding;