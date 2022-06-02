import React, {useContext} from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/fontawesome-free-solid'
import './Csspartsshowfood.css'
import ContextOrderFood from "../../../Context/ContextOrderFood";

const ShowFoodcom = ({picture,nameFood,descriptionFood,price,clhishdivaddtrashlowoff,clhishbuttonadd,clhishlowwoff,clahishtrach,plusnumberandaddfoodtocard,LowoffnumberandLowofffoodtocard,removenuberandremovefoodtocard}) => {

    const context = useContext(ContextOrderFood)

    return(
        <div style={{height: "280px"}} className="container">
            <div className="col h-100">
                <div className="card h-100">

                    <div className="d-flex h-100">
                        <div className="mt-3 card-img-right" style={{marginRight: "5px",padding: "0px 9px"}}>
                            {picture}
                        </div>
                        <div className="card-body d-flex flex-column w-100" style={{padding: "14px"}}>
                            <h4 className="card-title w-100 titleshowfood">{nameFood}</h4>
                            <strong className="card-text mt-1 descriptionshowfood">{descriptionFood}</strong>
                        </div>
                    </div>
                    <div className={`card-footer`} style={{border: "none"}}>
                        <div className="d-flex col-lg-6 align-items-center justify-content-start">
                            <button className={`btn btn-primary ${clhishbuttonadd}`} onClick={plusnumberandaddfoodtocard}>Add</button>
                            <div className={`${clhishdivaddtrashlowoff}`}>
                                <button className="btn rounded-circle shadow border border-primary" onClick={plusnumberandaddfoodtocard}>+</button>
                                <p className="m-1"></p>
                                <button className="btn btn-primary">{context.numberfoodadded}</button>
                                <p className="m-1"></p>
                                <FontAwesomeIcon icon={faTrash} color="red" onClick={removenuberandremovefoodtocard} className="clahishtrach"/>
                                <div className="">
                                    <button className={`btn rounded-circle border border-primary ${clhishlowwoff}`} onClick={LowoffnumberandLowofffoodtocard}>-</button>
                                </div>
                            </div>
                        </div>
                        <div className="h-100 col-lg-1"></div>
                        <div className="h-100 col-lg-5 d-flex mt-1 align-items-center justify-content-end">
                            <p className="text-muted shadow p-2 rounded">{price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowFoodcom;