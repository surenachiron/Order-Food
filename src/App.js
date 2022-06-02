import React, {useContext, useState} from "react";
import ContextOrderFood from "./Context/ContextOrderFood";
import MapinShowFood from "./Component/MenuResturant/ShowFood/MapinShowFood";

// Todo : img
import ghormehsabziimage from './img/ghormeh-sabzi-for-Order-Food.jpg';
import kebabimage from './img/kebabforOrderFood.jpg';
import pizzaimage from './img/Piazza-for-Order-Food.jpg';
import diziimage from './img/dizi-for-Order_Food.jpg';
import LogoAsadorEtxebarri from './img/Logo-For-Asador-Etxebarri.jpg';
import LogoCentral from './img/Logo-For-Central.jpg';
import LogoGeranium from './img/Logo-For-Geranium.png';
import LogoNoma from './img/Logo-For-Noma.png';

import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/fontawesome-free-solid'


const App = () => {

    const context = useContext(ContextOrderFood)

    const [getFood,changeFood] = useState([
        {id:1, picture : <img src={ghormehsabziimage} alt="ghormehsabziimage" width="112px" height="112px" />, namefood: "ghormeh-sabzi", descriptionfood: "a food great and perfect and nice",price: "50$" },
        {id:2, picture : <img src={kebabimage} alt="kebabimage" width="112px" height="112px" />, namefood: "Kebab", descriptionfood: "a food perfect and nice and great", price: "80$" },
        {id:3, picture : <img src={pizzaimage} alt="pizzaimage" width="112px" height="112px" />, namefood: "pizza", descriptionfood: "a food great and perfect and nice", price: "65$" },
        {id:4, picture : <img src={diziimage} alt="diziimage" width="112px" height="112px" />, namefood: "dizy", descriptionfood: "a food" +
                " perfect and nice and great", price: "100$" },
        {id:1, picture : <img src={ghormehsabziimage} alt="ghormehsabziimage" width="112px" height="112px" />, namefood: "ghormeh-sabzi", descriptionfood: "a food great and perfect and nice",price: "50$" },
        {id:2, picture : <img src={kebabimage} alt="kebabimage" width="112px" height="112px" />, namefood: "Kebab", descriptionfood: "a food perfect and nice and great", price: "80$" },
        {id:3, picture : <img src={pizzaimage} alt="pizzaimage" width="112px" height="112px" />, namefood: "pizza", descriptionfood: "a food great and perfect and nice", price: "65$" },
        {id:4, picture : <img src={diziimage} alt="diziimage" width="112px" height="112px" />, namefood: "dizy", descriptionfood: "a food" +
                " perfect and nice and great", price: "100$" }
    ]);
    const [getResturant, changeResturant] = useState([
        {id:1, resturant: "AsadorEtxebarri", logo: <img src={LogoAsadorEtxebarri} width="150px" height="150px" alt="logoResturantAsadorEtxebarri" />},
        {id:2, resturant: "Central", logo: <img src={LogoCentral} width="150px" height="150px" alt="LogoResturantCentral" />},
        {id:3, resturant: "Geranium", logo: <img src={LogoGeranium} width="150px" height="150px" alt="LogoResturantGeranium" />},
        {id:4, resturant: "Noma", logo: <img src={LogoNoma} width="150px" height="150px" alt="LogoResturantNoma" />}
    ])
    const [getTruefalseForAddincard, changeTruefalseForAddincard] = useState(false)
    const [getNumberAddtoCard , changeNumberAddtoCard] = useState(0)


    // TODO : Features in future
    // const [getSeatreservation1resturant,changeSeatreservation1resturant] = useState([
    //     {table: 1,numbersandaly: 1,price: "20$"},
    //     {table: 1,numbersandaly: 2,price: "20$"},
    //     {table: 1,numbersandaly: 3,price: "20$"},
    //     {table: 1,numbersandaly: 4,price: "20$"},
    //     {table: 1,numbersandaly: 5,price: "20$"},
    //     {table: 1,numbersandaly: 6,price: "75$$"}
    // ])
    // const [getSeatreservation2resturant,changeSeatreservation2resturant] = useState([
    //     {table: 2,numbersandaly: 1,price: "15$"},
    //     {table: 2,numbersandaly: 2,price: "15$"},
    //     {table: 2,numbersandaly: 3,price: "15$"},
    //     {table: 2,numbersandaly: 4,price: "15$"},
    //     {table: 2,numbersandaly: 5,price: "15$"},
    //     {table: 2,numbersandaly: 6,price: "70$"}
    // ])
    // const [getselectsandalyofthetable, changeselectsandalyofthetable] = useState(false)
    //
    let HiddenAndShowDivplus0mines0trash,HiddenAndShowbuttonAdd,HiddenShowMines,HiddenShowtrash
    if(getTruefalseForAddincard === true) {
        HiddenAndShowbuttonAdd = "d-none"
        HiddenAndShowDivplus0mines0trash = "d-flex"
    } else {
        HiddenAndShowbuttonAdd = "d-block"
        HiddenAndShowDivplus0mines0trash = "d-none"
    }

    if (getNumberAddtoCard  > 1) {
        HiddenShowMines = "d-block"
        HiddenShowtrash = "d-none"
    } else{
        HiddenShowMines = "d-none"
        HiddenShowtrash = "d-block"
    }

    if(getNumberAddtoCard === 0) {
        HiddenAndShowbuttonAdd = "d-block"
        HiddenAndShowDivplus0mines0trash = "d-none"
    } else {
        HiddenAndShowbuttonAdd = "d-none"
        HiddenAndShowDivplus0mines0trash = "d-flex"
    }

    const AddfoodtoCart = (id) => {
        console.log("hey")
        // let one = 1;
        // let finish = 0;
        // finish += one;
        // changeNumberAddtoCard({finish})
        // changeTruefalseForAddincard(true)
    }
    console.log(getNumberAddtoCard,getTruefalseForAddincard)

    const Lowofffoodfromthecart = (id) => {
        let posh = changeNumberAddtoCard - 1
        changeNumberAddtoCard(posh)
    }
    const removenumberandfoodtocard = (id) => {
        changeNumberAddtoCard(0)
        changeTruefalseForAddincard(false)
    }



    return(
        <ContextOrderFood.Provider value={{
            Food : getFood,
            img : getResturant,
            numberfoodadded: getNumberAddtoCard,


            functionAddNumberToStateAndAddFoodtoCard : AddfoodtoCart,
            functionLowoffNumberToStateAndLowoffFoodToCard : Lowofffoodfromthecart,
            functionRemoveNumbeToStateAndRemovefoodtocard : removenumberandfoodtocard,
        }}>

            <div>

                <div>
                    {/*{header}*/}
                </div>

                <div style={{padding: "4.25rem 1rem 1rem"}} className="d-flex">

                    <div style={{width: "341px"}} className="border shadow">

                    </div>

                    <div style={{width: "682px"}} className="m-auto">
                        <MapinShowFood
                            classHiddenandShowDivaddvtrashvmines ={HiddenAndShowDivplus0mines0trash}
                            classHiddenandshowbuttonadd ={HiddenAndShowbuttonAdd}
                            classhiddeenshowlowoff = {HiddenShowMines}
                            classhiddenshowtrash = {HiddenShowtrash}
                        >
                        </MapinShowFood>
                    </div>

                    <div style={{width: "341px"}} className="border shadow">

                        <div className="d-flex mt-3 align-items-center justify-content-center">
                            <p className="fw-bold">Seller Courier : 5$</p>
                            <FontAwesomeIcon icon={faMotorcycle} color="blue" style={{margin: "0 5px 15px 0"}}/>
                        </div>

                        <div className="mt-5">
                            <FontAwesomeIcon icon={"shopping-cart"} className="text-muted"></FontAwesomeIcon>
                            <h6 className="text-muted">Your shopping cart is empty!</h6>
                        </div>

                    </div>

                </div>

            </div>
        </ContextOrderFood.Provider>
    )

}

export default App;