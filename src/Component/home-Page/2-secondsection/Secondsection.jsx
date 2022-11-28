import React, { Fragment } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

import ContextOrderFood from "../../../context/ContextOrderFood.js";

import './forsection2.css'


const Seconssection = () => {

    const context = useContext(ContextOrderFood)

    return (
        <Fragment>
            <div className="h-100 mt-5 container" id="StartOrderFood">
                <h1 className="d-flex align-items-center justify-content-center mt-5 mb-5 fw-bold">Choose a Resturant For Order</h1>
                <div className="row">
                    {context.resturant.map(o => (
                        <div className="col-lg-3 col-sm-6 divcolsection1">
                            <NavLink to={o.name} className='tagnavlinksaction1 text-warning'>
                                <div className="backgroundformap">
                                    <img className="w-100 h-100" style={{ borderRadius: "16px" }} src={o.logo} />
                                </div>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div >
        </Fragment >
    )

}

export default Seconssection