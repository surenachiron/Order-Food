import React, { Fragment, useContext } from "react";
import ContextOrderFood from "../../../context/ContextOrderFood";
import OrderResponsiv from "./OrderResponsiv";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/fontawesome-free-solid'


const MapforOrderResponsiv = () => {

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
                <OrderResponsiv
                    nameFoodOrder={o.nameFoodOrder}
                    picture={o.picture}
                    price={o.price}
                    numberorderr={o.numberorderr}

                    AddinOrderFood={() => context.AddinOrderFood(o.id)}
                    DeletinOrderFood={() => context.DeletinOrderFood(o.id)}
                    MinesinOrderFood={() => context.MinesinOrderFood(o.id)}
                >
                </OrderResponsiv>
            ))}
        </Fragment >
    )
}

export default MapforOrderResponsiv