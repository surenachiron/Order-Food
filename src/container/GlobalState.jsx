import React, { useState } from "react";
import ContextOrderFood from "./ContextOrderFood";

import ghormehsabziimage from '../img/ghormeh-sabzi-for-Order-Food.jpg';
import kebabimage from '../img/kebabforOrderFood.jpg';
import pizzaimage from '../img/Piazza-for-Order-Food.jpg';
import diziimage from '../img/dizi-for-Order_Food.jpg';
import beefstroganoffimage from '../img/Beef-Stroganoff-for-Order-Food.jpg';
import caesarsaladimage from '../img/Caesar-salad-for-Order-Food.png';
import googlemaps from '../img/googlemap.png'
import LogoAsadorEtxebarri from '../img/Logo-For-Asador-Etxebarri.jpg';
import LogoCentral from '../img/Logo-For-Central.jpg';
import LogoGeranium from '../img/Logo-For-Geranium.png';
import LogoNoma from '../img/Logo-For-Noma.png';
import LogoAlbino from '../img/Logo-For-Albino-Resturant.jpg';
import LogoHamber from '../img/Logo-For-Hamber-Resturant.png';
import LogoResturantfake from '../img/Logo-For-Resturantfake.jpg';
import LogoTagline from '../img/Logo-For-Tagline-Here.png';
import '../component/menuResturant/showFood/Csspartsshowfood.css'

const GlobalState = ({ children }) => {

    const [getResturant, changeResturant] = useState([
        { id: 1, name: "AsadorEtxebarri", logo: LogoAsadorEtxebarri, foods: "", orderfood: [] },
        {
            id: 2, name: "Hamber", logo: LogoHamber, foods: [
                { id: 1, numberorder: 0, picture: <img src={ghormehsabziimage} alt="ghormehsabziimage" width="112px" height="112px" />, namefood: "ghormehsabzi", descriptionfood: "a food great and perfect and nice", price: 50 },
                { id: 2, numberorder: 0, picture: <img src={kebabimage} alt="kebabimage" width="112px" height="112px" />, namefood: "kebab", descriptionfood: "a food perfect and nice and great", price: 80 },
                { id: 3, numberorder: 0, picture: <img src={pizzaimage} alt="pizzaimage" width="112px" height="112px" />, namefood: "pizza", descriptionfood: "a food great and perfect and nice", price: 65 },
                { id: 4, numberorder: 0, picture: <img src={diziimage} alt="diziimage" width="112px" height="112px" />, namefood: "dizi", descriptionfood: "a food perfect and nice and great", price: 100 },
                { id: 5, numberorder: 0, picture: <img src={beefstroganoffimage} alt="beefstroganoffimage" width="112px" height="112px" />, namefood: "beefstroganoff", descriptionfood: "a food great and perfect and nice", price: 90 },
                { id: 6, numberorder: 0, picture: <img src={caesarsaladimage} alt="caesarsaladimage" width="112px" height="112px" />, namefood: "caesarsalad", descriptionfood: "a food perfect and nice and great", price: 30 }
            ], orderfood: []
        },

        { id: 3, name: "Geranium", logo: LogoGeranium, foods: "", orderfood: [] },

        { id: 4, name: "Noma", logo: LogoNoma, foods: "", orderfood: [] },

        {
            id: 5, name: "Tagline", logo: LogoTagline, foods: "", orderfood: []
        },

        { id: 6, name: "Central", logo: LogoCentral, foods: "", orderfood: [] },

        { id: 7, name: "Resturantfake", logo: LogoResturantfake, foods: "", orderfood: [] },

        { id: 8, name: "Albino", logo: LogoAlbino, foods: "", orderfood: [] },
    ]);

    const [getimageimportant] = useState([
        {
            id: 0,
            name: "imageghormehsabzi",
            img: <img src={ghormehsabziimage} alt="ghormehsabziimage" width="112px" height="112px" />
        },
        {
            id: 1,
            name: "imagekebab",
            img: <img src={kebabimage} alt="kebabimage" width="112px" height="112px" />
        },
        {
            id: 2,
            name: "imagepizza",
            img: <img src={pizzaimage} alt="pizzaimage" width="112px" height="112px" />
        },
        {
            id: 3,
            name: "imagedizi",
            img: <img src={diziimage} alt="diziimage" width="112px" height="112px" />
        },
        {
            id: 4,
            name: "imagebeefstroganoff",
            img: <img src={beefstroganoffimage} alt="beefstroganoffimage" width="112px" height="112px" />
        },
        {
            id: 5,
            name: "imagecaesarsalad",
            img: <img src={caesarsaladimage} alt="caesarsaladimage" width="112px" height="112px" />
        },
        {
            id: 6,
            name: "googlemaps",
            img: <img src={googlemaps} alt="googlemapsimage" className="w-100 h-75" />
        },
    ])

    let foodsresturant;

    for (let i = 0; i < getResturant.length; i++) {
        if (("/" + getResturant[i].name) === (window.location.pathname)) {
            foodsresturant = getResturant[i].name
        }
    }

    const AddedOrder = (resturant, id) => {
        const beforefood = [...getResturant]
        const findstate = beforefood.findIndex(p => p.name === resturant)
        const Accessibilityfake = beforefood[findstate]
        const findfood = Accessibilityfake.foods.findIndex(p => p.id === id)
        const Accessibilityasle = Accessibilityfake.foods[findfood]

        Accessibilityasle.numberorder += 1
        const editstateFood = [...beforefood];
        editstateFood[findstate].foods[findfood] = Accessibilityasle;
        changeResturant(editstateFood)

        const changeaddFoodOrder = {
            nameFoodOrder: Accessibilityasle.namefood,
            picture: Accessibilityasle.picture,
            price: Accessibilityasle.price,
            numberorderr: Accessibilityasle.numberorder,
            id: Accessibilityasle.id
        }

        const findstateOrder = Accessibilityfake.orderfood.findIndex(m => m.nameFoodOrder === Accessibilityasle.namefood)
        const AccessibilityOrder = Accessibilityfake.orderfood[findstateOrder]

        if (AccessibilityOrder === undefined || AccessibilityOrder === false) {
            Accessibilityfake.orderfood.push(changeaddFoodOrder)
        } else {
            AccessibilityOrder.numberorderr += 1
            editstateFood[findstate].orderfood[findstateOrder] = AccessibilityOrder;
            changeResturant(editstateFood)
        }
    }

    const deletorder = (resturant, id) => {
        const beforefood = [...getResturant]
        const findstate = beforefood.findIndex(p => p.name === resturant)
        const Accessibilityfake = beforefood[findstate]
        const findfood = Accessibilityfake.foods.findIndex(p => p.id === id)
        const Accessibilityasle = Accessibilityfake.foods[findfood]
        Accessibilityasle.numberorder -= 1
        const editstateFood = [...beforefood];
        editstateFood[findstate].foods[findfood] = Accessibilityasle;
        changeResturant(editstateFood)

        const findfoodordr = Accessibilityfake.orderfood.findIndex(p => p.id === id)
        const Accessibilityasleorder = Accessibilityfake.orderfood[findfoodordr]
        const filterorderinstate = Accessibilityfake.orderfood.filter(o => o.nameFoodOrder !== Accessibilityasleorder.nameFoodOrder)
        editstateFood[findstate].orderfood = filterorderinstate;
        changeResturant(editstateFood)
    }

    const Minesorder = (resturant, id) => {
        const beforefood = [...getResturant]
        const findstate = beforefood.findIndex(p => p.name === resturant)
        const Accessibilityfake = beforefood[findstate]
        const findfood = Accessibilityfake.foods.findIndex(p => p.id === id)
        const Accessibilityasle = Accessibilityfake.foods[findfood]
        Accessibilityasle.numberorder -= 1
        const editstateFood = [...beforefood];
        editstateFood[findstate].foods[findfood] = Accessibilityasle;
        changeResturant(editstateFood)

        const findfoodorder = Accessibilityfake.orderfood.findIndex(p => p.id === id)
        const Accessibilityasleorder = Accessibilityfake.orderfood[findfoodorder]
        Accessibilityasleorder.numberorderr -= 1
        editstateFood[findstate].orderfood[findfoodorder] = Accessibilityasleorder;
        changeResturant(editstateFood)
    }

    const AddinOrderFood = (resturant, id) => {
        const beforefood = [...getResturant]
        const findstate = beforefood.findIndex(p => p.name === resturant)
        const Accessibilityfake = beforefood[findstate]
        const findfood = Accessibilityfake.foods.findIndex(p => p.id === id)
        const Accessibilityasle = Accessibilityfake.foods[findfood]

        Accessibilityasle.numberorder += 1
        const editstateFood = [...beforefood];
        editstateFood[findstate].foods[findfood] = Accessibilityasle;

        const findfoodorder = Accessibilityfake.orderfood.findIndex(p => p.id === id)
        const Accessibilityasleorder = Accessibilityfake.orderfood[findfoodorder]
        Accessibilityasleorder.numberorderr += 1

        editstateFood[findstate].orderfood[findfoodorder] = Accessibilityasleorder;
        changeResturant(editstateFood)
    }

    const ClearStateOrderFood = () => {
        const beforefood = [...getResturant]
        const findstate = beforefood.findIndex(p => p.name === foodsresturant)
        beforefood[findstate].orderfood = [];
        for (let i = 0; i < beforefood[findstate].foods.length; i++) {
            beforefood[findstate].foods[i].numberorder = 0
        }
        changeResturant(beforefood)
    }

    return (
        <ContextOrderFood.Provider value={{
            resturant: getResturant,
            image: getimageimportant,
            AddedOrder: AddedOrder,
            deletorder: deletorder,
            Minesorder: Minesorder,
            AddinOrderFood: AddinOrderFood,
            ClearStateOrderFood: ClearStateOrderFood,
        }}>
            {children}
        </ContextOrderFood.Provider>
    )
}
export default GlobalState