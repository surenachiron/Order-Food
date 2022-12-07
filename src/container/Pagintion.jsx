import React, { Fragment, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footersite from "../Component/Footer/Footersite";
import Headersite from "../Component/header/Headersite";
import Layoutorderpaymet from "../Component/MenuResturant/orderResponsiv/Layoutorderpaymet";
import Loginn from "../Component/loginandregister/Loginn";
import Registerr from "../Component/loginandregister/Registerr";
import Aboutt from "../Component/Footer/Aboutt";
import CollectingComponentsHomepage from "../Component/home-Page/layout/CollectingComponentsHomepage";

import ContextOrderFood from "./ContextOrderFood";

import CollectingComponentsMenuResturant from "../Component/MenuResturant/layout/CollectingComponentsMenuResturant";


const Paginition = () => {

    const context = useContext(ContextOrderFood)

    const location = useLocation()
    let header = ''
    let footer = ''
    if (location.pathname === "/login" || location.pathname === "/register") {
        header = ''
        footer = ''
    } else {
        header = <Headersite />
        footer = <Footersite />
    }

    return (
        <Fragment>
            {header}
            <Routes>
                <Route path="/shoppingcart" element={<Layoutorderpaymet />} />
                <Route path="/login" element={<Loginn />} />
                <Route path="/register" element={<Registerr />} />
                <Route path="/aboutus" element={<Aboutt />} />
                {context.resturant.map(o => (
                    <Route path={o.name} element={<CollectingComponentsMenuResturant />} />
                ))}
                <Route path="/" exact element={<CollectingComponentsHomepage />} />
            </Routes>
            {footer}
        </Fragment>
    )

}

export default Paginition