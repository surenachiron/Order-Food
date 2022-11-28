import React, { Fragment } from "react";


const AboutUs = () => {

    return (
        <Fragment>
            <div className="d-flex flex-column justify-content-center align-items-center mt-3" style={{ height: "70vh" }}>
                <h1>Memeber Group</h1>
                <hr style={{ width: "70%", color: "black" }} />
                <div className="text-left">
                    <ul>
                        <li style={{ listStyleType: "initial" }}><h3>mohamamd karimi nezhad</h3></li>
                        <li style={{ listStyleType: "initial" }}><h3>alireza foroghi moghaddam</h3></li>
                        <li style={{ listStyleType: "initial" }}><h3>mohammad badieiyan</h3></li>
                        <li style={{ listStyleType: "initial" }}><h3>amirhoseyn mirzabeyghi</h3></li>
                        <li style={{ listStyleType: "initial" }}><h3>mohammad sadegh momen bande khoda</h3></li>
                    </ul>


                </div>

            </div>
        </Fragment>
    )

}

export default AboutUs;