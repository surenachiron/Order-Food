import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import './headdrcss.css'

const Mobilmenu = () => {

    return (
        <Fragment>
            <div className="w-50 py-1 bg-white position-absolute" style={{ transition: "transform 10s cubic-bezier(0.4, 0, 1, 1) 0", height: "80vh", borderRadius: "17px 17px 17px 17px" }}>
                <ul>
                    <li className="listmenu">
                        <NavLink to='/' className='linkmenu'>home</NavLink>
                    </li>
                    <li>
                        resturant
                    </li>
                    <li>
                        <NavLink to='/login' className='linkmenu'>login</NavLink>
                    </li>
                    <li>
                        <NavLink to='/register' className='linkmenu'>register</NavLink>
                    </li>
                    <li>
                        sellers
                    </li>
                </ul>
            </div>
        </Fragment>
    )

}

export default Mobilmenu;