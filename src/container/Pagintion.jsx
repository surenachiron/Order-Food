import React, { Fragment, useContext, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footersite from "../Component/Footer/Footersite";
import Headersite from "../Component/header/Headersite";
import Layoutorderpaymet from "../Component/MenuResturant/paymentorder/Layoutorderpaymet";
import Loginn from "../Component/auth/Loginn";
import Registerr from "../Component/auth/Registerr";
import CollectingComponentsHomepage from "../Component/home-Page/layout/CollectingComponentsHomepage";
import CollectingComponentsMenuResturant from "../Component/MenuResturant/layout/CollectingComponentsMenuResturant";
import ContextOrderFood from "../context/ContextOrderFood";


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

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <Fragment>
            {header}
            <Routes>
                <Route path="/shoppingcart" element={<Layoutorderpaymet />} />
                <Route path="/login" element={<Loginn />} />
                <Route path="/register" element={<Registerr />} />
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