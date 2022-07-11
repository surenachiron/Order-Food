import React, { useEffect, useState } from "react";
import LogoAsadorEtxebarri from '../../../img/Logo-For-Asador-Etxebarri.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faStar } from '@fortawesome/fontawesome-free-solid'


const ShowResturant = () => {

    const [widthscreen, setWidthCcreen] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidthCcreen(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    let backgroundformd = ''
    if (widthscreen < 1199 && widthscreen > 767) {
        backgroundformd = ("backgroundformdcss")
    } else {
        backgroundformd = ('')
    }

    return (
        <div className="m-2">

            <div className={`${backgroundformd} d-flex p-2`}>
                <div>
                    <img src={LogoAsadorEtxebarri} width='70px' height='70px' className='rounded shadow' />
                </div>
                <div className="d-flex flex-column" style={{ marginLeft: "6px" }}>
                    <div className="d-flex" style={{ marginBottom: "-10px" }}>
                        <div className='d-flex'>
                            <FontAwesomeIcon icon={faStar} color='yellow' style={{ margin: "5px 0 1px 0" }} />
                            <p className="fw-normal">4.3</p>
                        </div>
                        <p className="ms-1 fw-normal">(327comment)</p>
                    </div>
                    <div style={{ width: "200px", height: "65px", overflow: "hidden" }}>
                        <p className="h5 text-dark">AsadorEtxebarri</p>
                    </div>
                </div>
            </div>

            <div className="mb-4 mt-2 p-2 d-flex align-items-center justify-content-center" style={{ cursor: "pointer", boxShadow: '0px 1px 0px 2px rgba(0 0 0 / 10%)', borderRadius: "18px", color: 'rgb(0, 184, 98)' }}>
                <FontAwesomeIcon style={{ border: '1px solid rgb(0, 184, 98)', padding: '5px', borderRadius: '10px' }} icon={faInfo} />
                <strong style={{ padding: '5px' }}>Information and comments</strong>
            </div>
        </div>
    )
}

export default ShowResturant;