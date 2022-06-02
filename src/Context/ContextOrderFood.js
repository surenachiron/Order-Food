import {createContext} from "react";


const ContextOrderFood = createContext({
    Food : [],
    picture : [],
    numberfoodadded : "" ,

    functionAddNumberToStateAndAddFoodtoCard : (id) => {},
    functionLowoffNumberToStateAndLowoffFoodToCard : (id) => {},
    functionRemoveNumbeToStateAndRemovefoodtocard : (id) => {},
    img : []
})

export default ContextOrderFood;