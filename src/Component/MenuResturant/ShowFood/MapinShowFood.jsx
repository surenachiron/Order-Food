import React, { useContext } from "react";
import ShowFoodcom from "./ShowFoodcom";
import ContextOrderFood from "../../../context/ContextOrderFood.js";

const MapinShowFood = () => {

    // #asle car

    const context = useContext(ContextOrderFood)
    // let foodsresturant = context.resturant.map(o => o.foods)
    // console.log(foodsresturant.map(o => o.namefood))

    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 w-100 m-auto h-100">
            {context.Food.map(o => (
                <ShowFoodcom
                    picture={o.picture}
                    nameFood={o.namefood}
                    descriptionFood={o.descriptionfood}
                    price={o.price}
                    numberorderr={o.numberorder}

                    AddedOrder={() => context.AddedOrder(o.id)}
                    deletorder={() => context.deletorder(o.id)}
                    Minesorder={() => context.Minesorder(o.id)}
                >
                </ShowFoodcom>
            ))}
        </div>
    )
}

export default MapinShowFood