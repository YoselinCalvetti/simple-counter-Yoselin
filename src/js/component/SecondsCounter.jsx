import React from "react";

//create your first component
const SecondsCounter = ({digito, digito2, digito3, digito4, digito5, digito6}) => {
    return (
        <div className="Counter d-flex flex-row justify-content-center p-3">
            <div className="calendar">
            <i className="fa fa-clock p-3"></i>
            </div>
            <div className="six p-3 fw-bold">{digito6}</div>
            <div className="five p-3 fw-bold">{digito5}</div>
            <div className="four p-3 fw-bold">{digito4}</div>
            <div className="three p-3 fw-bold">{digito3}</div>
            <div className="two p-3 fw-bold">{digito2}</div>
            <div className="one p-3 fw-bold">{digito}</div>
           
        </div>
    );
};
export default SecondsCounter;