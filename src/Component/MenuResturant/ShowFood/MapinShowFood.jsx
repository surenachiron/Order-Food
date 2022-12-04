import React, { useContext } from "react";
import ShowFoodcom from "./ShowFoodcom";
import ContextOrderFood from "../../../context/ContextOrderFood.js";
import { useLocation } from 'react-router-dom'

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
        </div>
    )
}

export default MapinShowFood