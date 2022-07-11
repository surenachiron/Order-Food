import React, { Children, useState } from "react";

import ContextOrderFood from "../context/ContextOrderFood.js";

// Todo : img
import ghormehsabziimage from '../img/ghormeh-sabzi-for-Order-Food.jpg';
import kebabimage from '../img/kebabforOrderFood.jpg';
import pizzaimage from '../img/Piazza-for-Order-Food.jpg';
import diziimage from '../img/dizi-for-Order_Food.jpg';
import beefstroganoffimage from '../img/Beef-Stroganoff-for-Order-Food.jpg';
import caesarsaladimage from '../img/Caesar-salad-for-Order-Food.png';
import LogoAsadorEtxebarri from '../img/Logo-For-Asador-Etxebarri.jpg';
import LogoCentral from '../img/Logo-For-Central.jpg';
import LogoGeranium from '../img/Logo-For-Geranium.png';
import LogoNoma from '../img/Logo-For-Noma.png';
import '../component/menuResturant/showFood/Csspartsshowfood.css'

const GlobalState = ({ children }) => {


    const [getFood, changeFood] = useState([
        { id: 1, numberorder: 0, picture: <img src={ghormehsabziimage} alt="ghormehsabziimage" width="112px" height="112px" />, namefood: "ghormeh-sabzi", descriptionfood: "a food great and perfect and nice", price: 50 },

        { id: 2, numberorder: 0, picture: <img src={kebabimage} alt="kebabimage" width="112px" height="112px" />, namefood: "Kebab", descriptionfood: "a food perfect and nice and great", price: 80 },

        { id: 3, numberorder: 0, picture: <img src={pizzaimage} alt="pizzaimage" width="112px" height="112px" />, namefood: "pizza", descriptionfood: "a food great and perfect and nice", price: 65 },
        { id: 4, numberorder: 0, picture: <img src={diziimage} alt="diziimage" width="112px" height="112px" />, namefood: "dizy", descriptionfood: "a food perfect and nice and great", price: 100 },

        { id: 5, numberorder: 0, picture: <img src={beefstroganoffimage} alt="beefstroganoffimage" width="112px" height="112px" />, namefood: "beef-stroganoff", descriptionfood: "a food great and perfect and nice", price: 90 },

        { id: 6, numberorder: 0, picture: <img src={caesarsaladimage} alt="caesarsaladimage" width="112px" height="112px" />, namefood: "caesar-salad", descriptionfood: "a food perfect and nice and great", price: 30 }
    ]);

    const [getFoodOrder, changeFoodOrder] = useState([])

    const [getResturant, changeResturant] = useState([
        { id: 1, resturant: "AsadorEtxebarri", logo: <img src={LogoAsadorEtxebarri} width="150px" height="150px" alt="logoResturantAsadorEtxebarri" /> },

        { id: 2, resturant: "Central", logo: <img src={LogoCentral} width="150px" height="150px" alt="LogoResturantCentral" /> },

        { id: 3, resturant: "Geranium", logo: <img src={LogoGeranium} width="150px" height="150px" alt="LogoResturantGeranium" /> },

        { id: 4, resturant: "Noma", logo: <img src={LogoNoma} width="150px" height="150px" alt="LogoResturantNoma" /> }
    ]);

    const AddedOrder = (id) => {

        // Add order number to food in State getFood
        const beforefood = [...getFood]
        const findstate = beforefood.findIndex(p => p.id === id)
        const Accessibility = beforefood[findstate]
        Accessibility.numberorder += 1
        const editstateFood = [...beforefood];
        editstateFood[findstate] = Accessibility;
        changeFood(editstateFood)

        // Add order number to food in State getFoodOrder
        // Add ordered food to orders in state getFoodOrder
        const beforeFoodOrder = [...getFoodOrder]
        const changeaddFoodOrder = {
            nameFoodOrder: Accessibility.namefood,
            picture : Accessibility.picture,
            price: Accessibility.price,
            numberorderr: Accessibility.numberorder,
            id: Accessibility.id
        }
        const findstateOrder = beforeFoodOrder.findIndex(m => m.nameFoodOrder === Accessibility.namefood)
        const AccessibilityOrder = beforeFoodOrder[findstateOrder]

        if (AccessibilityOrder === undefined || AccessibilityOrder === false) {
            beforeFoodOrder.push(changeaddFoodOrder)
            changeFoodOrder(beforeFoodOrder)
        } else {
            AccessibilityOrder.numberorderr += 1
            beforeFoodOrder[findstateOrder] = AccessibilityOrder;
            changeFoodOrder(beforeFoodOrder)
        }
    }


    const deletorder = (id) => {
        // Delet order food in State getFood
        const beforeFood = [...getFood]
        const findindexx = beforeFood.findIndex(p => p.id === id)
        const Accessibility = beforeFood[findindexx]
        Accessibility.numberorder -= 1
        beforeFood[findindexx] = Accessibility
        changeFood(beforeFood)

        // Delet order food in State getFoodOrder
        const beforeFoodOrder = [...getFoodOrder]
        const filterorderinstate = beforeFoodOrder.filter(o => o.nameFoodOrder !== Accessibility.namefood)
        changeFoodOrder(filterorderinstate)
    }

    const Minesorder = (id) => {
        // mines order number to food in State getFood
        const beforeFood = [...getFood]
        const findindexx = beforeFood.findIndex(p => p.id === id)
        const Accessibility = beforeFood[findindexx]
        Accessibility.numberorder -= 1
        beforeFood[findindexx] = Accessibility
        changeFood(beforeFood)

        // Mines order number to food in State getFoodOrder
        const beforeFoodOrder = [...getFoodOrder]
        const findobjectinstate = beforeFoodOrder.findIndex(m => m.nameFoodOrder === Accessibility.namefood)
        const AccessibilityOrder = beforeFoodOrder[findobjectinstate]
        AccessibilityOrder.numberorderr -= 1
        beforeFoodOrder[findobjectinstate] = AccessibilityOrder
        changeFoodOrder(beforeFoodOrder)
    }

    const AddinOrderFood = (id) => {
        const beforeFoodOrder = [...getFoodOrder]
        const findindexOrderFood = beforeFoodOrder.findIndex(p => p.id === id)
        const AccessibilityOrder = beforeFoodOrder[findindexOrderFood]
        AccessibilityOrder.numberorderr += 1
        beforeFoodOrder[findindexOrderFood] = AccessibilityOrder
        changeFoodOrder(beforeFoodOrder)

        const beforeFood = [...getFood]
        const findindexFodd = beforeFood.findIndex(p => p.namefood === AccessibilityOrder.nameFoodOrder)
        const Accessibility = beforeFood[findindexFodd]
        Accessibility.numberorder += 1
        beforeFood[findindexFodd] = Accessibility
        changeFood(beforeFood)
    }

    const DeletinOrderFood = (id) => {
        const beforeFoodOrder = [...getFoodOrder]
        const findfilterOrder = beforeFoodOrder.filter(p => p.id !== id)
        changeFoodOrder(findfilterOrder)

        const finindexOrder = beforeFoodOrder.findIndex(p => p.id === id)
        const AccessibilityOrder = beforeFoodOrder[finindexOrder]
        const beforeFood = [...getFood]
        const findindexFodd = beforeFood.findIndex(p => p.namefood === AccessibilityOrder.nameFoodOrder)
        const Accessibility = beforeFood[findindexFodd]
        Accessibility.numberorder -= 1
        beforeFood[findindexFodd] = Accessibility
        changeFood(beforeFood)
    }

    const MinesinOrderFood = (id) => {
        const beforeFoodOrder = [...getFoodOrder]
        const findindexOrderFood = beforeFoodOrder.findIndex(p => p.id === id)
        const AccessibilityOrder = beforeFoodOrder[findindexOrderFood]
        AccessibilityOrder.numberorderr -= 1
        beforeFoodOrder[findindexOrderFood] = AccessibilityOrder
        changeFoodOrder(beforeFoodOrder)

        const beforeFood = [...getFood]
        const findindexFodd = beforeFood.findIndex(p => p.namefood === AccessibilityOrder.nameFoodOrder)
        const Accessibility = beforeFood[findindexFodd]
        Accessibility.numberorder -= 1
        beforeFood[findindexFodd] = Accessibility
        changeFood(beforeFood)
    }

    const ClearStateOrderFood = () => {
        const beforeFood = [...getFood]
        getFood.map(p => {
            const find = beforeFood.findIndex(o => o.numberorder >= 1)
            const Acc = beforeFood[find]
            if (Acc !== undefined || find !== -1) {
                Acc.numberorder = 0
                beforeFood[find] = Acc
                changeFood(beforeFood)
            }
        })
        changeFoodOrder([])
    }



    return (
        <ContextOrderFood.Provider value={{
            Food: getFood,
            FoodOrders: getFoodOrder,
            img: getResturant,
            AddedOrder: AddedOrder,
            deletorder: deletorder,
            Minesorder: Minesorder,
            AddinOrderFood: AddinOrderFood,
            MinesinOrderFood: MinesinOrderFood,
            DeletinOrderFood: DeletinOrderFood,
            ClearStateOrderFood: ClearStateOrderFood,
            lengthFoodOrder: getFoodOrder.length,
        }}>
            {children}
        </ContextOrderFood.Provider>
    )
}
export default GlobalState