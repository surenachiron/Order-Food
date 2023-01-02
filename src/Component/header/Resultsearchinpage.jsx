import React, { Fragment, useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'
import ContextOrderFood from "../../context/ContextOrderFood";

const Resultsearchinpage = () => {

    const context = useContext(ContextOrderFood)
    const location = useLocation()

    const [getresultsearchboxlittle, setresultsearchboxlittle] = useState([])
    const [getresultsearchboxgreat, setresultsearchboxgreat] = useState([])
    const [gettextsearch, settextsearch] = useState("")
    let statesearchfake = []

    const handleshowfoodfortextsearch = e => {
        setresultsearchboxlittle([])
        setresultsearchboxgreat([])
        settextsearch(e.target.value)
        for (let i = 0; i <= context.resturant.length; i++) {
            let motherfucker = context.resturant[i].foods.length
            for (let m = 0; m < motherfucker; m++) {
                let namefoodse = context.resturant[i].foods[m].namefood
                if (e.target.value === namefoodse.slice(0, e.target.value.length) && e.target.value.length >= 1) {
                    let testressear = {
                        img: context.resturant[i].foods[m].picture,
                        namefood: context.resturant[i].foods[m].namefood,
                        price: context.resturant[i].foods[m].price,
                        nameres: context.resturant[i].name
                    }
                    statesearchfake.push(testressear)
                }
            }
            setresultsearchboxgreat(statesearchfake)
            setresultsearchboxlittle(statesearchfake.slice(0, 2))
        }
    }

    useEffect(() => {
        document.getElementById("searchboxx").value = ""
        settextsearch("")
    }, [location])

    const testtt = () => {
        localStorage.setItem("textseatch", gettextsearch)
    }


    return (
        <Fragment>
            <div id="Search" className="col-lg-4 col-md-8 d-flex align-items-center justify-content-center">
                <div className="px-3 py-1 rounded search-input">
                    <input id='searchboxx' type="text" className="border-0" placeholder="Search in the restaurant" onChange={handleshowfoodfortextsearch} />
                    <NavLink to={`/resultsearch/${gettextsearch}`}>
                        <FontAwesomeIcon icon={faSearch} color="orange" style={{ cursor: "pointer" }} onClick={testtt} />
                    </NavLink>
                </div>
                {(gettextsearch.length > 0) ? (
                    <div className="position-absolute bg-white" style={{ marginTop: "43px", height: "1%" }}>
                        {(getresultsearchboxgreat.length > 0) ? (
                            <Fragment>
                                {(getresultsearchboxgreat.length > 2) ? (
                                    <div>
                                        {getresultsearchboxlittle.map(o => (
                                            <NavLink to={`/${o.nameres}`} className="text-dark">
                                                <div className="bg-white d-flex justify-content-between align-items-center hoverresultsearch" style={{ border: "1px solid #e5e5e5", borderRadius: "15px", padding: '2px 13px', width: "85vh" }}>
                                                    <img src={o.img} alt="pic img search" width='40' height='40' />
                                                    <h6>{o.namefood}</h6>
                                                    <span className="text-warning">${o.price}</span>
                                                    <div className="d-flex flex-column">
                                                        <span>resutran : </span>
                                                        <span>{o.nameres}</span>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        ))}
                                        <NavLink to={`/resultsearch/${gettextsearch}`}>
                                            <div className="bg-white text-center hoverlittleorgreatresultsearch text-muted" style={{ border: "1px solid #e5e5e5", borderRadius: "15px", padding: '2px 13px', width: "85vh", cursor: "pointer" }} >
                                                show more food
                                            </div>
                                        </NavLink>
                                    </div>
                                ) :
                                    (getresultsearchboxlittle.map(o => (
                                        <NavLink to={`/${o.nameres}`} className="text-dark">
                                            <div className="bg-white d-flex justify-content-between align-items-center hoverresultsearch" style={{ border: "1px solid #e5e5e5", borderRadius: "15px", padding: '2px 13px', width: "85vh" }}>
                                                <img src={o.img} alt="pic img search" width='40' height='40' />
                                                <h6>{o.namefood}</h6>
                                                <span className="text-warning">${o.price}</span>
                                                <div className="d-flex flex-column">
                                                    <span>resutran : </span>
                                                    <span>{o.nameres}</span>
                                                </div>
                                            </div>
                                        </NavLink>
                                    )))
                                }
                            </Fragment>
                        ) :
                            <div className="bg-white text-center" style={{ border: "1px solid #e5e5e5", borderRadius: "15px", padding: '2px 13px', width: "85vh" }} >
                                dos not result
                            </div>
                        }
                    </div>
                ) : ""}
            </div>
        </Fragment >
    )
}

export default Resultsearchinpage;