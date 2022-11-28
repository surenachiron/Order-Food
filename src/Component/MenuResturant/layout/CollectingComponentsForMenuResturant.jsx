import React, { Fragment, useEffect, useState } from "react";
import MapinShowFood from "../showFood/MapinShowFood";
import ShowResturant from "../detalisResturant/ShowResturant";
import MapforOrder from "../orders/MapforOrder";
import HeaderOrder from "../orders/HeaderOrder";
import FooterOrder from "../orders/FooterOrder";


const CollectingComponentsForMenuResturant = () => {

    const [widthscreen, setWidthCcreen] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidthCcreen(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);


    return (
        <Fragment>
            <div className="mx-auto px-3 mt-5">
                <div className="row">
                    <div className="col-12 col-xl-3 col-lg-12 col-md-12 col-sm-12">
                        <ShowResturant />
                    </div>
                    <div className="col-12 col-xl-6 col-lg-8 col-md-12 col-sm-12">
                        <MapinShowFood />
                    </div>
                    {(widthscreen >= 992) ? (
                        <div className="col-12 col-xl-3 col-lg-4 col-md-12 col-sm-12">
                            <div className="position-sticky" style={{ top: '4.8rem' }}>
                                <HeaderOrder />
                                <div className="overscroll-contain overflow-y-auto py-10 max-h-screen top-20 sticky">
                                    <div className="row mx-1 border border-muted rounded">
                                        <MapforOrder />
                                    </div>
                                    <FooterOrder />
                                </div>
                            </div>
                        </div>
                    ) : ""}
                </div>
            </div>
        </Fragment>
    )

}

export default CollectingComponentsForMenuResturant