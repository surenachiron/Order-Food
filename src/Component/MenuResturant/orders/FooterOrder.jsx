import React, { Fragment, useContext } from "react";
import ContextOrderFood from "../../../context/ContextOrderFood";


const FooterOrder = () => {

    const context = useContext(ContextOrderFood)

    let num = 0
    context.FoodOrders.map(p => (num += (p.price * p.numberorderr)))

    let offfalse = ""
    if (context.lengthFoodOrder >= 1) {
        offfalse =
            <div className="mt-5">
                <div className="d-flex align-items-center justify-content-center p-3 border border-muted rounded">
                    <div className="d-flex flex-column align-items-start justify-content-center">
                        <div className="d-flex">
                            <h6 className="text-dark">Total :</h6>
                            <h6 className="text-muted mx-3">{num} $</h6>
                        </div>
                        <div className="d-flex">
                            <h6 className="text-dark">TX :</h6>
                            <h6 className="text-muted mx-3">FREE</h6>
                        </div>
                        <div className="d-flex">
                            <h6 className="text-dark">Seller Courier :</h6>
                            <h6 className="text-muted mx-3">5$</h6>
                        </div>
                        <div className="d-flex">
                            <h6 className="text-dark">Payable :</h6>
                            <h6 className="text-muted mx-3">{num + 5}$</h6>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-center mt-2 mb-3">
                    <button className="btnproforadd" style={{ fontWeight: "bold", padding: "14px 41px" }}>the payment</button>
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