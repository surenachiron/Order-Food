import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const FooterOrder = ({ resturantorder, nameresturant }) => {

    let sum = 0
    for (let i = 0; i < resturantorder.length; i++) {
        let result = resturantorder[i].numberorderr * resturantorder[i].price
        sum += result
    }

    const setnameresturan = () => {
        localStorage.removeItem('nameresturantforshoworder');
        localStorage.setItem('nameresturantforshoworder', nameresturant)
    }

    let offfalse = ""
    if (resturantorder.length >= 1) {
        offfalse =
            <div className="mt-5">
                <div className="d-flex align-items-center justify-content-center p-3 border border-muted rounded">
                    <div className="d-flex flex-column align-items-start justify-content-center">
                        <div className="d-flex">
                            <h6 className="text-dark">Total :</h6>
                            <h6 className="text-muted mx-3">${sum}</h6>
                        </div>
                        <div className="d-flex">
                            <h6 className="text-dark">TX :</h6>
                            <h6 className="text-muted mx-3">FREE</h6>
                        </div>
                        <div className="d-flex">
                            <h6 className="text-dark">Seller Courier :</h6>
                            <h6 className="text-muted mx-3">$5</h6>
                        </div>
                        <div className="d-flex">
                            <h6 className="text-dark">Payable :</h6>
                            <h6 className="text-muted mx-3">${sum + 5}</h6>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-center mt-2 mb-3">
                    <NavLink to="/shoppingcart"><button onClick={() => setnameresturan} className="btnproforadd" style={{ fontWeight: "bold", padding: "14px 41px" }}>the payment</button></NavLink>
                </div>
            </div>
    }

    return (
        <Fragment>
            {offfalse}
        </Fragment>
    )
}

export default FooterOrder