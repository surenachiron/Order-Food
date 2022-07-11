import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/fontawesome-free-solid'
import './Csspartsshowfood.css'
import Helmet from "react-helmet"


const ShowFoodcom = ({ picture, nameFood, descriptionFood, price, numberorderr, AddedOrder, deletorder, Minesorder }) => {

    let DeletNoneOrFlex = ""
    let MinesNoneOrFlex = ""
    let classadd = ""
    let classdelet = ""
    if (numberorderr === 1) {
        DeletNoneOrFlex = "d-flex"
        MinesNoneOrFlex = "d-none"
    } else {    
        DeletNoneOrFlex = "d-none"
        MinesNoneOrFlex = "d-flex"
    }
    if (numberorderr >= 1) {
        classadd = "d-none"
        classdelet = "d-flex mb-3"
    } else {
        classadd = "d-flex mb-3"
        classdelet = "d-none"
    }

    return (
        <div className="container">
            <div className="h-100">
                <Helmet>
                    <title>chef-food - AsadorEtxebarri</title>
                </Helmet>
                <div className="card h-100">

                    <div className="d-flex">
                        <div className="mt-3 card-img-right" style={{ marginRight: "5px", padding: "0px 9px" }}>
                            {picture}
                        </div>
                        <div className="card-body d-flex flex-column w-100" style={{ padding: "14px",overflowX: "auto" }}>
                            <h5 className="card-title w-100 titleshowfood">{nameFood}
                            </h5>
                            <p className="text-muted card-text mt-1 text-start">{descriptionFood}</p>
                        </div>
                    </div>

                    <div className={`card-footer d-flex justify-content-between align-items-end h-100`} style={{ border: "none" }}>

                        <div className="d-flex align-items-end justify-content-end">
                            <p className="text-muted shadow p-2 rounded">{price}$</p>
                        </div>

                        <div className="d-flex align-items-end justify-content-end">

                            <div className={`${classadd}`}>
                                <button className="btnproforadd" style={{ fontWeight: "bold" }} onClick={AddedOrder}>Add</button>
                            </div>

                            <div className={`${classdelet}`}>
                                <button className={`btnpro`} onClick={AddedOrder}>+
                                </button>
                                <button className="btnproforshownumberorder m-1">{numberorderr}
                                </button>
                                <button className={`btnpro ${DeletNoneOrFlex}`} onClick={deletorder}>
                                    <FontAwesomeIcon icon={faTrash} className="fa-sm m-auto" color="red" />
                                </button>
                                <div className={MinesNoneOrFlex}>
                                    <button className="btnpro" onClick={Minesorder}>-</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default ShowFoodcom;