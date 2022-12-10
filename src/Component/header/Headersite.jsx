import React, { useEffect, useRef, useState } from "react";
import Mobilmenu from "./Mobilmenu";
import LogoWebSite from './logo.jpg'
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faStore, faBars } from '@fortawesome/fontawesome-free-solid'
import { faClose } from "@fortawesome/free-solid-svg-icons";

import './headdrcss.css'

const Headersite = () => {

    const ref = useRef()

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {

        const checkIfClickedOutside = e => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }

    }, [ref])


    const [widthscreen, setWidthCcreen] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidthCcreen(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    let showmenumobil, logomenu;

    if (isMenuOpen === true && widthscreen <= 991) {
        showmenumobil = <Mobilmenu />
        logomenu = faClose
    } else {
        logomenu = faBars
    }


    let largepageOrresponsivpage = ''
    if (widthscreen >= 992) {
        largepageOrresponsivpage =
            <div className="container shadowheader">
                <div className="row d-flex align-items-center">
                    <div id="Logo" className="col-lg-1">
                        <NavLink to='/'>
                            <img src={LogoWebSite} alt='logosite' width="100px" height="80px" />
                        </NavLink>
                    </div>
                    <div id="Location" className="col-lg-3 d-flex flex-column align-items-start justify-content-start">
                        <p className="mx-1 fw-bold">
                            Selected address
                        </p>
                        <div className="d-flex">
                            <FontAwesomeIcon icon={faMap} color='orange' className="mx-1" />
                            <h6 className="mx-1 text-muted">Tehran, Pasdaran</h6>
                            <p className="mx-1 text-muted">....</p>
                        </div>
                    </div>
                    <div id="Search" className="col-lg-4 d-flex align-items-center justify-content-center">
                        <input type="Search" className="px-5 py-2 rounded search-input" placeholder="Search in the restaurant" />
                    </div>
                    <div className="col-lg-2 d-flex align-items-center justify-content-center">
                        <button className="btn d-flex btn-danger buttonellers">
                            <FontAwesomeIcon icon={faStore} color='orange' />
                            <h5 className="taghsellers">sellers</h5>
                        </button>
                    </div>
                    <div id="LoginOrSubmit" className="col-lg-2 d-flex align-items-center justify-content-center">
                        <NavLink to="/login" className="btn btn-warning buttonlogin p-2">Sign in or join</NavLink>
                    </div>
                </div>
            </div>
    } else if (widthscreen >= 768) {
        largepageOrresponsivpage =
            <div className="container shadowheader p-2" >
                <div className="row d-flex align-items-center mx-3">
                    <div className="col-md-1 d-flex justify-content-end">
                        <FontAwesomeIcon icon={logomenu} onClick={() => setIsMenuOpen(oldState => !oldState)} style={{ cursor: "pointer" }} />
                    </div>
                    <div className="col-md-10 d-flex align-items-center justify-content-center">
                        <input type="Search" className="px-5 py-1 rounded search-input" placeholder="Search in the restaurant" />
                    </div>
                    <div className="col-md-1">
                        <FontAwesomeIcon icon={faMap} className='text-warning' />
                    </div>
                </div>
            </div>
    } else {
        largepageOrresponsivpage =
            <div className="container shadowheader">
                <div className="row m-auto d-flex justify-content-end align-items-center">
                    <div className="col-1 col-sm-1 d-flex justify-content-end">
                        <FontAwesomeIcon icon={logomenu} onClick={() => setIsMenuOpen(oldState => !oldState)} style={{ cursor: "pointer" }} />
                    </div>
                    <div className="col-10 col-sm-10 d-flex justify-content-center align-items-center">
                        <NavLink to='/' className=''>
                            <img src={LogoWebSite} alt='logosite' height='50px' width="80px" />
                        </NavLink>
                    </div>
                    <div className="col-1 col-sm-1 d-flex justify-content-end align-items-center">
                        <button className="btn">
                            <FontAwesomeIcon icon={faMap} className='text-warning rounded-circle px-1 shadow-lg' />
                        </button>
                    </div>
                </div>
            </div>

    }

    return (
        <div className="position-sticky top-0 container" style={{ zIndex: '1' }} ref={ref}>
            <header>
                {largepageOrresponsivpage}
            </header>
            {showmenumobil}
        </div >
    )

}

export default Headersite