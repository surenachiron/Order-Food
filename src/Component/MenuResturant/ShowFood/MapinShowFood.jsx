import React, {useContext} from "react";
import ShowFoodcom from "./ShowFoodcom";
import ContextOrderFood from "../../../Context/ContextOrderFood";

const MapinShowFood = ({classHiddenandShowDivaddvtrashvmines,classHiddenandshowbuttonadd,
                           classhiddeenshowlowoff,classhiddenshowtrash}) => {

    const context = useContext(ContextOrderFood)

    return(
        <div className="row row-cols-1 row-cols-md-2 g-4 w-100 m-auto h-100">
            {context.Food.map(o => (
                <ShowFoodcom
                    picture = {o.picture}
                    nameFood = {o.namefood}
                    descriptionFood = {o.descriptionfood}
                    price = {o.price}
                    plusnumberandaddfoodtocard = {context.functionAddNumberToStateAndAddFoodtoCard(o.id)}
                    LowoffnumberandLowofffoodtocard = {context.functionLowoffNumberToStateAndLowoffFoodToCard(o.id)}
                    removenuberandremovefoodtocard = {context.functionRemoveNumbeToStateAndRemovefoodtocard(o.id)}

                    clhishdivaddtrashlowoff ={classHiddenandShowDivaddvtrashvmines}
                    clhishbuttonadd ={classHiddenandshowbuttonadd}
                    clhishlowwoff = {classhiddeenshowlowoff}
                    clahishtrach = {classhiddenshowtrash}
                >
                </ShowFoodcom>
            ))}
        </div>
    )
}

export default MapinShowFood