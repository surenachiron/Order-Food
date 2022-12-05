import React, { useContext, useEffect, useState } from "react";
import ShowFoodcom from "./ShowFoodcom";
import { NavLink, useLocation } from 'react-router-dom'
import ContextOrderFood from "../../../container/ContextOrderFood";

const MapinShowFood = () => {

    const context = useContext(ContextOrderFood)
    const location = useLocation();

    let foodsresturant;
    let contentmain = "";

    for (let i = 0; i < context.resturant.length; i++) {
        if (("/" + context.resturant[i].name) === (location.pathname)) {
            foodsresturant = context.resturant[i]
        }
    }

    const [widthscreen, setWidthCcreen] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidthCcreen(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    let paymentorder = "";
    if (widthscreen <= 991 && foodsresturant.orderfood.length >= 1) paymentorder =
        <div>
            <NavLink to='/shoppingcart'>
                <button className="btn btn-warning fw-bold w-100">payment</button>
            </NavLink>
        </div>
    else paymentorder = "";


    if (foodsresturant.foods !== undefined && foodsresturant.foods !== "") {
        contentmain =
            foodsresturant.foods.map(o => (
                <ShowFoodcom
                    picture={o.picture}
                    nameFood={o.namefood}
                    descriptionFood={o.descriptionfood}
                    price={o.price}
                    numberorderr={o.numberorder}

                    AddedOrder={() => context.AddedOrder(foodsresturant.name, o.id)}
                    deletorder={() => context.deletorder(foodsresturant.name, o.id)}
                    Minesorder={() => context.Minesorder(foodsresturant.name, o.id)}
                >
                </ShowFoodcom>
            ))
    } else {
        contentmain =
            <ShowFoodcom
                notfoos={`${location.pathname.slice(1)} resturant not foods for order and show`}
            >
            </ShowFoodcom>
    }

    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 w-100 m-auto h-100">
            {contentmain}
            <div className="w-100 d-flex align-items-center justify-content-center">
                <div style={{ width: "98%" }} className="position-fixed bottom-0 container">
                    {paymentorder}
                </div>
            </div>
        </div>
    )
}

export default MapinShowFood