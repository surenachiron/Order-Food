import { createContext } from "react";


const ContextOrderFood = createContext({
    Food: [],
    FoodOrders: [],
    resturant: [],
    image: [],
    AddedOrder: () => { },
    deletorder: () => { },
    Minesorder: () => { },
    AddinOrderFood: () => { },
    MinesinOrderFood: () => { },
    DeletinOrderFood: () => { },
    ClearStateOrderFood: () => { },
    lengthFoodOrder: '',
})

export default ContextOrderFood;