import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from './App';

import LoginHandle from './elements/login/LoginHandle';
import Logout from './elements/login/Logout';
import SignUp from './elements/login/SignUp';

import Skin from './pages/Skin/Skin';
import Hair from './pages/Hair/Hair';

import SebasIntegration from './elements/api/SebasIntegration';

//import ComingSoon from './components/ComingSoon/ComingSoon';

//import SearchBar from './components/SearchBar/SearchBar';

import SebaTest from './products/Seba/SebaTest';

import SearchBarCleanser from './pages/Cleanser/SearchBarCleanser'
import SearchBarConditioner from './pages/Conditioner/SearchBarConditioner';
import SearchBarHairOils from './pages/HairOils/SearchBarHairOils';
import SearchBarMoisturizer from './pages/Moisturizer/SearchBarMoisturizer';
import SearchBarSerum from './pages/Serum/SearchBarSerum';
import SearchBarShampoo from './pages/Shampoo/SearchBarShampoo';
import SearchBarSPF from './pages/SPF/SearchBarSPF';
import SearchBarToner from './pages/Toner/SearchBarToner';

//import SebaContent from './products/Seba/SebaContent';

//import Cleanser from './pages/Cleanser/Cleanser';
//import Toner from './pages/Toner/Toner';
//import Moisturizer from './pages/Moisturizer/Moisturizer';
//import Serum from './pages/Serum/Serum';
//import SPF from './pages/SPF/SPF';
//import HairOils from './pages/HairOils/HairOils'
//import Shampoo from './pages/Shampoo/Shampoo'
//import Conditioner from  './pages/Conditioner/Conditioner'

import Other from './pages/Other/Other'

import About from './elements/footer/About'
import GradingMethod from './elements/footer/GradingMethod'
import Privacy from './elements/footer/Privacy'
import Terms from './elements/footer/Terms'
import Consult from './elements/footer/Consult'
import Shop from './elements/footer/Shop'
import API from './elements/footer/API'
import Business from './elements/footer/Business'
import Sitemap from './elements/footer/Sitemap'
import Blog from './elements/footer/Blog';



const LandingPage = () => {
  const user = localStorage.getItem("token")
  return (
    <Router>
        <Routes>

            <Route exact path="/" element={<App />} />

            {/*<Route exact path="/sebas" element={<SebaContent />} />*/}
            <Route exact path="/sebas" element={<SebaTest />} />

            {/*<Route exact path="/sebas" element={<ComingSoon />} />*/}

            <Route exact path="/skin" element={<Skin />} />
            <Route exact path="/cleanser" element={<SearchBarCleanser />} />
            <Route exact path="/toner" element={<SearchBarToner />} />
            <Route exact path="/moisturizer" element={<SearchBarMoisturizer />} />
            <Route exact path="/serum" element={<SearchBarSerum />} />
            <Route exact path="/spf" element={<SearchBarSPF />} />
            

            <Route exact path="/hair" element={<Hair />} />
            <Route exact path="/hair-oils" element={<SearchBarHairOils />} />
            <Route exact path="/shampoo" element={<SearchBarShampoo />} />
            <Route exact path="/conditioner" element={<SearchBarConditioner />} />
            
            <Route exact path="/others" element={<Other />} />

            <Route exact path="/login" element={<LoginHandle />} />
            <Route exact path="/signup" element={<SignUp />} />
            {user && <Route exact path="/logout" element={<Logout />} />}

            <Route exact path="/api-integration" element={<SebasIntegration />} />

            <Route exact path="/about" element={<About />} />
            <Route exact path="/grading-method" element={<GradingMethod />} />
            <Route exact path="/privacy" element={<Privacy />} />
            <Route exact path="/terms" element={<Terms />} />
            <Route exact path="/consult" element={<Consult />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/api-ref" element={<API />} />
            <Route exact path="/business" element={<Business />} />
            <Route exact path="/sitemap" element={<Sitemap />} />

        </Routes>
    </Router>
  )
}

export default LandingPage