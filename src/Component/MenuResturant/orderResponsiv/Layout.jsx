import React, { Fragment } from "react";
import HeaderOrder from '../orders/HeaderOrder'
import MapforOrderResponsiv from './MapforOrderResponsiv'
import FooterOrder from "../orders/FooterOrder";

const Layout = () => {

    return (
        <Fragment>
            <div className="container px-3">
                <div className="row d-flex">
                    <MapforOrderResponsiv />
                </div>
            </div>
        </Fragment>
    )

}

export default Layout