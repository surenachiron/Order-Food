import React, {useState} from "react";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const App = () => {

    const [getFood,changeFood] = useState([
        {id:1,pictur: <img src = "" alt = "" />, namefood: "Ghorme-Sabzy", descriptionfood: "a food great and perfect and nice",price: "50$" },
        {id:2,pictur: <img src = "" alt = "" />, namefood: "Kebab", descriptionfood: "a food perfect and nice and great", price: "80$" },
        {id:3,pictur: <img src = "" alt = "" />, namefood: "jooje", descriptionfood: "a food great and perfect and nice", price: "65$" },
        {id:4,pictur: <img src = "" alt = "" />, namefood: "dizy", descriptionfood: "a food perfect and nice and great", price: "100$" }
    ]);
    const [getrezervtable1resturant,changerezervtable1resturant] = useState([
        {table: 1,numbersandaly: 1,price: "20$"},
        {table: 1,numbersandaly: 2,price: "20$"},
        {table: 1,numbersandaly: 3,price: "20$"},
        {table: 1,numbersandaly: 4,price: "20$"},
        {table: 1,numbersandaly: 5,price: "20$"},
        {table: 1,numbersandaly: 6,price: "75$$"}
    ])
    const [getrezervtable2resturant,changerezervtable2resturant] = useState([
        {table: 2,numbersandaly: 1,price: "15$"},
        {table: 2,numbersandaly: 2,price: "15$"},
        {table: 2,numbersandaly: 3,price: "15$"},
        {table: 2,numbersandaly: 4,price: "15$"},
        {table: 2,numbersandaly: 5,price: "15$"},
        {table: 2,numbersandaly: 6,price: "70$"}
    ])
    const [getselectsandalyofthetable, changeselectsandalyofthetable] = useState(false)

    const addfoodbesabadkharid = (id) => {

    }

    const minesfoodazsabadkharid = (id) => {

    }


    return(
        <ContextFodd.Provider value={

        }>
            <div>

            </div>
        </ContextFodd.Provider>
    )

}

export default App;