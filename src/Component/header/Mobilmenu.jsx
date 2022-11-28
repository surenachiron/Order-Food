import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import './headdrcss.css'

const Mobilmenu = () => {

    return (
        <Fragment>
            <div className="w-100">
                <div>
                    <ul>
                        <li className="listmenu">
                            <NavLink to='/' className='linkmenu'>home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/resturant' className='linkmenu'>resturant</NavLink>
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
            </div>
        </Fragment>
    )

}

export default Mobilmenu;