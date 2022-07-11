import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import './forsection2.css'




const Seconssection = () => {

    return (
        <Fragment>
            <div className="h-100 mt-5 container" id="StartOrderFood">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 divcolsection1">
                        <NavLink to='' className='tagnavlinksaction1 text-warning'>
                            <div className='backdivsiction1Pizza'>
                                <div className="d-flex align-items-end justify-content-start w-100 h-100">
                                    <p className="tagpdesimagessection1">Pizzas</p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-lg-3 col-sm-6 divcolsection1">
                        <NavLink to='/menuresturantAsadorEtxebarri' className='tagnavlinksaction1 text-warning'>
                            <div className='backdivsiction1Kebab'>
                                <div className="d-flex align-items-end justify-content-start w-100 h-100">
                                    <p className="tagpdesimagessection1">Kebabs</p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-lg-3 col-sm-6 divcolsection1">
                        <NavLink to='' className='tagnavlinksaction1 text-warning'>
                            <div className='backdivsiction1Jojeh'>
                                <div className="d-flex align-items-end justify-content-start w-100 h-100">
                                    <p className="tagpdesimagessection1">Joje Kebabs</p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-lg-3 col-sm-6 divcolsection1">
                        <NavLink to='' className='tagnavlinksaction1 text-warning'>
                            <div className='backdivsiction1Gheymeg'>
                                <div className="d-flex align-items-end justify-content-start w-100 h-100">
                                    <p className="tagpdesimagessection1">Gheymes</p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 divcolsection1">
                        <NavLink to='' className='tagnavlinksaction1 text-warning'>
                            <div className='backdivsiction1Ghormesabzy'>
                                <div className="d-flex align-items-end justify-content-start w-100 h-100">
                                    <p className="tagpdesimagessection1">Ghorme-Sabzys</p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-lg-3 col-sm-6 divcolsection1">
                        <NavLink to='' className='tagnavlinksaction1 text-warning'>
                            <div className='backdivsiction1Caesar'>
                                <div className="d-flex align-items-end justify-content-start w-100 h-100">
                                    <p className="tagpdesimagessection1">Caesar Salad</p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-lg-3 col-sm-6 divcolsection1">
                        <NavLink to='' className='tagnavlinksaction1 text-warning'>
                            <div className='backdivsiction1Beefstrongof'>
                                <div className="d-flex align-items-end justify-content-start w-100 h-100">
                                    <p className="tagpdesimagessection1">Beef-Stroganoffs</p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-lg-3 col-sm-6 divcolsection1">
                        <NavLink to='' className='tagnavlinksaction1 text-warning'>
                            <div className='backdivsictionDizi'>
                                <div className="d-flex align-items-end justify-content-start w-100 h-100">
                                    <p className="tagpdesimagessection1">Dizis</p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}

export default Seconssection