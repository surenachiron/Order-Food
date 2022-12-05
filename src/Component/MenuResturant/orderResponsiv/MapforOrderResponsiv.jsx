import React, { Fragment, useContext } from "react";
import OrderResponsiv from "./OrderResponsiv";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/fontawesome-free-solid'
import ContextOrderFood from "../../../container/ContextOrderFood";


const MapforOrderResponsiv = () => {

    const context = useContext(ContextOrderFood)
    let nameresturant = [];
    let number = 0;

    for (let i = 0; i < context.resturant.length; i++) {
        if (context.resturant[i].orderfood !== undefined && context.resturant[i].orderfood.length >= 1) {
            nameresturant.push({ number: i })
            number++;
        }
    }

    let lenghtforim = 0
    for (let i = 0; i < context.resturant.length; i++) {
        if (context.resturant[i].orderfood !== undefined && context.resturant[i].orderfood.length >= 1)
            lenghtforim += 1;
    }

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
            {nameresturant.map(b => context.resturant[b.number].orderfood.map(o => (
                <div className="col-12 col-lg-6 col-sm-12 col-md-6">
                    <OrderResponsiv
                        nameresturant={context.resturant[b.number].name}
                        nameFoodOrder={o.nameFoodOrder}
                        picture={o.picture}
                        price={o.price}
                        numberorderr={o.numberorderr}

                        lenghtforim={lenghtforim}

                        AddinOrderFood={() => context.AddinOrderFood(context.resturant[nameresturant[0]].name, o.id)}
                        DeletinOrderFood={() => context.deletorder(context.resturant[nameresturant[0]].name, o.id)}
                        MinesinOrderFood={() => context.Minesorder(context.resturant[nameresturant[0]].name, o.id)}
                    >
                    </OrderResponsiv>
                </div>
            )))}
        </Fragment >
    )
}

export default MapforOrderResponsiv