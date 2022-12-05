import React, { Fragment, useEffect, useState, useContext } from "react";
import MapinShowFood from "../showFood/MapinShowFood";
import ShowResturant from "../detalisResturant/ShowResturant";
import MapforOrder from "../orders/MapforOrder";
import HeaderOrder from "../orders/HeaderOrder";
import FooterOrder from "../orders/FooterOrder";
import { useLocation } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars';
import ContextOrderFood from "../../../container/ContextOrderFood";

const CollectingComponentsForMenuResturant = () => {

    const [widthscreen, setWidthCcreen] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidthCcreen(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const context = useContext(ContextOrderFood)
    const location = useLocation();

    let foodsresturant;

    for (let i = 0; i < context.resturant.length; i++) {
        if (("/" + context.resturant[i].name) === (location.pathname)) {
            foodsresturant = context.resturant[i]
        }
    }

    return (
        <Fragment>
            <div className="mx-auto px-3 mt-5">
                <div className="row">
                    <div className="col-12 col-xl-3 col-lg-12 col-md-12 col-sm-12">
                        <ShowResturant />
                    </div>
                    <div className="col-12 col-xl-6 col-lg-8 col-md-12 col-sm-12">
                        <MapinShowFood lenghorder={foodsresturant.orderfood.length} />
                    </div>
                    {(widthscreen >= 992) ? (
                        <div className="col-12 col-xl-3 col-lg-4 col-md-12 col-sm-12">
                            <div className="position-sticky" style={{ top: '4.8rem' }}>
                                <HeaderOrder lenghorder={foodsresturant.orderfood.length} />
                                <Scrollbars  style={{width:320,height: 420 }}>
                                    <div className="border border-muted rounded">
                                        <MapforOrder lenghorder={foodsresturant.orderfood} />
                                    </div>
                                    <FooterOrder resturantorder={foodsresturant.orderfood} />
                                </Scrollbars>
                            </div>
                        </div>
                    ) : ""}
                </div>
            </div>
        </Fragment>
    )

}

export default CollectingComponentsForMenuResturant