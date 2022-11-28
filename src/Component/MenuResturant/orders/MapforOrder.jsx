import React, { Fragment, useContext } from "react";
import ContextOrderFood from "../../../context/ContextOrderFood";
import Orders from "./Orders";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/fontawesome-free-solid'


const MapforOrder = () => {

    const context = useContext(ContextOrderFood)
    let Trash = ''
    if (context.lengthFoodOrder >= 1) {
        Trash =
            <div className="d-flex justify-content-end mx-2 mt-2">
                <button onClick={context.ClearStateOrderFood} className="faTrashClearOrder">
                    <FontAwesomeIcon icon={faTrash} className="fa-sm m-auto" color="orange" />
                </button>
            </div>
    }

    return (
        <Fragment>
            {Trash}
            {context.FoodOrders.map(o => (
                <Orders
                    nameFoodOrder={o.nameFoodOrder}
                    price={o.price}
                    numberorderr={o.numberorderr}

                    AddinOrderFood={() => context.AddinOrderFood(o.id)}
                    DeletinOrderFood={() => context.DeletinOrderFood(o.id)}
                    MinesinOrderFood={() => context.MinesinOrderFood(o.id)}
                >
                </Orders>
            ))}
        </Fragment >
    )
}

export default MapforOrder