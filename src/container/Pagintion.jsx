import React, { Fragment } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import Header from "../component/header/Header";
import CollectingComponentsForHomepage from "../component/home-Page/layout/CollectingComponentsForHomepage";
import Login from "../component/loginandregister/Login";
import Register from "../component/loginandregister/Register";
import CollectingComponentsForMenuResturant from "../component/menuResturant/layout/CollectingComponentsForMenuResturant";
import Layout from "../component/menuResturant/orderResponsiv/Layout";


const Paginition = () => {

    const location = useLocation()
    let header = ''
    let footer = ''
    if (location.pathname === "/login" || location.pathname === "/register") {
        header = ''
        footer = ''
    } else {
        header = <Header />
        footer = <Footer />
    }

    return (
        <Fragment>
            {header}
            <Routes>
                <Route path="/menuresturantAsadorEtxebarri" element={<CollectingComponentsForMenuResturant />} />
                <Route path="/shoppingcart" element={<Layout />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="/" exact element={<CollectingComponentsForHomepage />} />
            </Routes>
            {footer}
        </Fragment>
    )

}

export default Paginition