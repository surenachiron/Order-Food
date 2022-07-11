import React, { Fragment, useContext } from "react";
import ContextOrderFood from "../../../context/ContextOrderFood";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/fontawesome-free-solid'
import '../showFood/Csspartsshowfood.css'
import '../orders/fororderFood.css'

const OrderResponsiv = ({ nameFoodOrder, picture, price, numberorderr, AddinOrderFood, DeletinOrderFood, MinesinOrderFood }) => {

    const context = useContext(ContextOrderFood)

    let DeletNoneOrFlex = ""
    let MinesNoneOrFlex = ""
    let classdelet = ""
    if (numberorderr === 1) {
        DeletNoneOrFlex = "d-flex"
        MinesNoneOrFlex = "d-none"
    } else {
        DeletNoneOrFlex = "d-none"
        MinesNoneOrFlex = "d-flex"
    }
    if (numberorderr >= 1) {
        classdelet = "d-flex"
    } else {
        classdelet = "d-none"
    }


    let { truee } = "";
    if (context.lengthFoodOrder >= 1) {
        truee =
            <div className="col-sm-12 col-md-6 mb-2 d-flex" style={{ borderLeft: "1px solid gainsboro" }}>

                <div className="mt-3 card-img-right" style={{ marginRight: "5px", padding: "0px 9px" }}>
                    {picture}
                </div>

                <div className={`${classdelet} d-flex flex-column align-items-start justify-content-center mt-2`}>

                    <h6 className="mx-3 my-1 d-flex">{nameFoodOrder}</h6>

                    <div className="d-flex">

                        <div className="d-flex align-items-end justify-content-end">
                            <p className="mx-3 m-1 text-muted">{price}$ : </p>
                        </div>

                        <div className="d-flex">

                            <button className={`btnpro`} onClick={AddinOrderFood}>+</button>

                            <button className="btnproforshownumberorder m-1">{numberorderr}
                            </button>

                            <button className={`btnpro ${DeletNoneOrFlex}`} onClick={DeletinOrderFood}>
                                <FontAwesomeIcon icon={faTrash} className="fa-sm m-auto" color="red" />
                            </button>

                            <div className={MinesNoneOrFlex}>
                                <button className="btnpro" onClick={MinesinOrderFood}>-</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    }

    return (
        <Fragment>
            {truee}
        </Fragment>
    )

}

export default OrderResponsiv