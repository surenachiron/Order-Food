import React, { Fragment } from "react";
import '../layout/forsectionhomepage.css'

const Firstsection = () => {

    return (
        <Fragment>
            <div className="backgroundfirstsection">
                <div className="mx-5">
                    <div className="row">
                        <div className="col-12 col-lg-8 col-md-10 col-sm-12 d-flex flex-column align-items-start justify-content-center divcollesftsection1">
                            <h1 className="forh1firstsection">WELLCOME TO CHEF-FOOD</h1>
                            <p className="text-white mt-2">Online ordering of food, fruit, bread, sweets and...</p>
                            <button className="btn btn-warning p-3 mt-2" >
                                <a href="#StartOrderFood" style={{ textDecoration: "none", color: 'black' }}>
                                    start Food in Chef-Food
                                </a></button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}

export default Firstsection