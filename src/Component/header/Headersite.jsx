import React, { useEffect, useRef, useState } from "react";
import Mobilmenu from "./Mobilmenu";
import LogoWebSite from './logo.jpg'
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faBars, faUser } from '@fortawesome/fontawesome-free-solid'
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

import './headdrcss.css'

const Headersite = () => {

    const cookies = new Cookies();
    const navigate = useNavigate();
    const ref = useRef()

    const [getShow, setShow] = useState(false)

    const onoff = () => setShow(!getShow)

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

    const cookieremove = () => {
        cookies.remove("user")
        onoff()
        toast.success("You have successfully exited the site", { position: "top-left" })
        navigate('/', { replace: true })
    }

    let letshowpropertielogin = ""
    let letshowpropertieloginmd = ""
    let letshowpropertieloginsm = ""
    if (getShow === true && cookies.get("user") !== null && cookies.get("user") !== undefined && cookies.get("user") !== "") {
        letshowpropertielogin =
            <div className="d-flex flex-column align-items-center " style={{ zIndex: "5", position: "absolute", margin: "0 20% 0 0" }}>
                <button className="btn rounded" style={{ backgroundColor: "white", border: "1px solid #ededed" }} onClick={() => cookieremove()}>Logout</button>
            </div>
        letshowpropertieloginmd =
            <div className="d-flex flex-column align-items-center " style={{ zIndex: "5", position: "absolute", margin: "0 16% 0 0" }}>
                <button className="btn rounded" style={{ backgroundColor: "white", border: "1px solid #ededed" }} onClick={() => cookieremove()}>Logout</button>
            </div>
        letshowpropertieloginsm =
            <div className="d-flex flex-column align-items-center " style={{ zIndex: "5", position: "absolute", margin: "0 10% 0 0" }}>
                <button className="btn rounded" style={{ backgroundColor: "white", border: "1px solid #ededed" }} onClick={() => cookieremove()}>Logout</button>
            </div>
    }

    let userboxorlogin = ""
    let userboxorloginmdsm = ""
    if (cookies.get("user") !== null && cookies.get("user") !== undefined && cookies.get("user") !== "") {
        userboxorlogin =
            <div className="d-flex align-items-center justify-content-center btn" onClick={() => onoff()}>
                <span>{cookies.get("user")}</span>
                <div className="border rounded-circle d-flex align-items-center justify-content-center ms-1" style={{ height: "40px", width: "40px" }}>
                    <FontAwesomeIcon icon={faUser} color='orange' className="mb-1" />
                </div>
            </div>
        userboxorloginmdsm =
            <div className="border rounded-circle d-flex align-items-center justify-content-center p-2 btn" style={{ height: "30px" }} onClick={() => onoff()}>
                <FontAwesomeIcon icon={faUser} color='orange' />
            </div>
    } else {
        userboxorlogin =
            <NavLink to="/login" className="btn btn-warning buttonlogin px-2">Sign in or join</NavLink>
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
                    <div id="Location" className="col-lg-3 d-flex flex-column align-items-center justify-content-center">
                        <div >
                            <p className="m-0 p-0 mx-1 fw-bold">
                                Selected address
                            </p>
                            <div className="d-flex align-items-center justify-content-center">
                                <FontAwesomeIcon icon={faMap} color='orange' className="mx-1 mb-2" />
                                <h6 className="mx-1 text-muted">Tehran, Pasdaran</h6>
                                <p className="mx-1 text-muted">....</p>
                            </div>
                        </div>
                    </div>
                    <div id="Search" className="col-lg-4 d-flex align-items-center justify-content-center">
                        <input type="Search" className="px-5 py-2 rounded search-input" placeholder="Search in the restaurant" />
                    </div>
                    <div className="col-lg-2 d-flex align-items-center justify-content-end"></div>
                    <div className="col-lg-2 d-flex align-items-center justify-content-center">
                        {userboxorlogin}
                        {letshowpropertielogin}
                    </div>

                </div>
            </div>
    } else if (widthscreen >= 768) {
        largepageOrresponsivpage =
            <div className="container shadowheader p-2" >
                <div className="row d-flex align-items-center mx-3">
                    <div className="col-md-2 d-flex justify-content-start">
                        <FontAwesomeIcon icon={logomenu} onClick={() => setIsMenuOpen(oldState => !oldState)} style={{ cursor: "pointer" }} />
                    </div>
                    <div className="col-md-8 d-flex align-items-center justify-content-center">
                        <input type="Search" className="px-5 py-1 rounded search-input" placeholder="Search in the restaurant" />
                    </div>
                    <div className="col-2 col-md-2 d-flex justify-content-center align-items-center">
                        <button className="btn">
                            <FontAwesomeIcon icon={faMap} className='text-warning rounded-circle px-1 shadow-lg' />
                        </button>
                        {letshowpropertieloginmd}
                        {userboxorloginmdsm}
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
                        {letshowpropertieloginsm}
                        {userboxorloginmdsm}
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