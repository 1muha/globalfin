import React from 'react'
import './Whowe.css'
import graph3 from "../../images/graph.png"

function Whowe() {
    return (
        <div>
            <div className="textwe">
                <h1 className="whore">WHO WE ARE</h1>
                <div className="divred3"></div>
                <h1 className="gfin">Global Finance is an experienced team dedicated to providing the best investment experience and top notch customer service to our investors.</h1>
                <h1 className="weran">We are an international financial company engaged in investment activities, which are related to trading on financial markets and cryptocurrency exchanges performed by qualified professional traders.</h1>
                <img src={graph3} alt="" className="graph3" />
            </div>
            <div className="gesat">
                <h1 className="chosan">Choose an investment plan to get started
                    and find out why millions of investors trust Us.</h1>
            </div>
        </div>
    )
}

export default Whowe    