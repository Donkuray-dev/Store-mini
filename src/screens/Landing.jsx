import AdminLogin from '../components/admin/Admin-Login';
import AdminContect from '../components/admin/Admin-contect';
import AdminUpload from '../components/admin/Admin-Upload';
import AdminShopType from '../components/admin/Admin-shop-type';
import AdminSignup from '../components/admin/Admin-Signup'
import AdminProfile from '../components/admin/Admin-Profile'
import AdminUploadProduct from '../components/admin/Admin-Upload-Product';
import AdminUrl from '../components/admin/Admin-Url';
import UserProfile from '../components/user/User-Profile';
import Cart from '../components/user/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,BrowserRouter, Routes } from 'react-router-dom';


function Landing() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/Admin-Login' element={<AdminLogin/>} />
                    <Route path='/Admin-Signup' element={<AdminSignup/>} />
                    <Route path='/Admin-Contect' element={<AdminContect/>} />
                    <Route path='/Admin-Upload' element={<AdminUpload/>} />
                    <Route path='/Admin-Shop-Type' element={<AdminShopType/>} />
                    <Route path='/Admin-Profile' element={<AdminProfile/>}/>
                    <Route path='/Admin-Upload-Product' element={<AdminUploadProduct/>}/>
                    <Route path='/Admin-Url' element={<AdminUrl/>}/>
                    <Route path='/Cart' element={<Cart/>}/>
                    <Route path='/' element={<UserProfile/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Landing;