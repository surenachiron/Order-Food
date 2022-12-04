import React, { Fragment } from "react";


const AboutUs = () => {

    return (
        <Fragment>
            <div className="d-flex flex-column justify-content-center align-items-center mt-3" style={{ height: "70vh" }}>
                <h1 className="fw-bold">Memeber Group</h1>
                <hr style={{ width: "70%", color: "black" }} />
                <div className="text-left">
                    <h3 className="text-muted">mohamamd karimi nezhad</h3>
                    <h3 className="text-muted">alireza foroghi moghaddam</h3>
                    <h3 className="text-muted">mohammad badieiyan</h3>
                    <h3 className="text-muted">mohammad sadegh momen bande khoda</h3>
                    <h3 className="text-muted">amirhoseyn mirzabeyghi</h3>
                </div>

            </div>
        </Fragment>
    )

}

export default AboutUs;