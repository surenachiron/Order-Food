import React, { Fragment, useContext, useEffect, useState } from "react";
import ContextOrderFood from "../../context/ContextOrderFood";
import LogoWebSite from './logo.jpg'
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faStore, faBars } from '@fortawesome/fontawesome-free-solid'


import './headdrcss.css'

const Header = () => {

    const [widthscreen, setWidthCcreen] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidthCcreen(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    let numberOrders = 0
    let hidenumber = ''
    const context = useContext(ContextOrderFood)
    const numberforshopingcard = context.FoodOrders.length
    if (numberforshopingcard === 0) {
        numberOrders = ''
        hidenumber = 'd-none'
    } else {
        numberOrders += numberforshopingcard
        hidenumber = 'block'
    }

    let largepageOrresponsivpage = ''
    if (widthscreen >= 992) {
        largepageOrresponsivpage =
            <header className="shadowheader mx-5">
                <div className="d-flex">
                    <div id="Logo" className="col-1">
                        <NavLink to='/'>
                            <img src={LogoWebSite} alt='logosite' width="100px" height="100px" />
                        </NavLink>
                    </div>
                    <div id="Location" className="col-3 d-flex flex-column align-items-center justify-content-end">
                        <div className="d-flex flex-column align-items-start">
                            <h5 className="mx-1">
                                Selected address
                            </h5>
                            <div className="d-flex">
                                <FontAwesomeIcon icon={faMap} color='orange' className="mx-1" />
                                <h6 className="mx-1 text-muted">Tehran, Pasdaran</h6>
                                <p className="mx-1 text-muted">....</p>
                            </div>
                        </div>
                    </div>
                    <div id="Search" className="col-4 d-flex flex-column align-items-center justify-content-center mx-1">
                        <input type="Search" className="px-5 py-2 rounded search-input" placeholder="Search in the restaurant" />
                    </div>
                    <div className="col-2 d-flex align-items-center justify-content-center">
                        <NavLink to='/forsellers' id="RegistrationOfSellers" className="btn d-flex btn-danger buttonellers">
                            <FontAwesomeIcon icon={faStore} color='orange' />
                            <h5 className="taghsellers">sellers</h5>
                        </NavLink>
                    </div>
                    <div id="LoginOrSubmit" className="col-2 d-flex align-items-center justify-content-center">
                        <NavLink to="/login" className="btn btn-warning buttonlogin">Sign in or join</NavLink>
                    </div>
                </div>
            </header>
    } else if (widthscreen >= 768) {
        largepageOrresponsivpage =
            <header>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-12 col-md-1">
                            <NavLink to="/shoppingcart" className="btn d-flex">
                                <FontAwesomeIcon icon="shopping-cart" className="text-danger" />
                                <strong className={hidenumber} style={{ color: "white", background: "red", borderRadius: "50%", marginLeft: "1px", padding: "2px" }}>
                                    {numberOrders}
                                </strong>
                            </NavLink>
                        </div>
                        <div className="col-12 col-md-1">
                            <FontAwesomeIcon icon={faMap} className='text-warning' />
                        </div>
                        <div className="col-12 col-md-8 d-flex align-items-center justify-content-center">
                            <input type="Search" className="px-1 py-1 mt-2 rounded search-input" placeholder="Search in the restaurant" />
                        </div>
                        <div className="col-12 col-md-1"></div>
                        <div className="col-12 col-md-1">
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </div>
                </div>
            </header>
    } else {
        largepageOrresponsivpage =
            <header>
                <div className="container">
                    <div className="row m-auto d-flex justify-content-end align-items-center">
                        <div className="col-3 col-sm-3 d-flex justify-content-end align-items-center">
                            <NavLink to="/shoppingcart" className="btn pe-2">
                                <FontAwesomeIcon icon="shopping-cart" className="text-danger" />
                                <strong className={hidenumber} style={{ color: "white", background: "red", borderRadius: "50%", marginLeft: "1px", padding: "2px" }}>
                                    {numberOrders}
                                </strong>
                            </NavLink>
                            <FontAwesomeIcon icon={faMap} className='text-warning rounded-circle px-1 shadow-lg' />
                        </div>
                        <div className="col-8 col-sm-8 d-flex justify-content-center align-items-center">
                            <NavLink to='/' className='me-5'>
                                <img src={LogoWebSite} alt='logosite' height='50px' width="80px" />
                            </NavLink>
                        </div>
                        <div className="col-1 col-sm-1 d-flex justify-content-end">
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </div>
                </div>
            </header>
    }

    return (
        <Fragment>
            {largepageOrresponsivpage}
        </Fragment >
    )

}

export default Header