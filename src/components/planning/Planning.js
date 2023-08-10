import React from 'react'
import './Planning.css'
import graph1 from "../../images/graph2.jpg"
import qual from "../../images/planningprocess.jpg"
import integ from "../../images/consultance.jpg"
import freedim from "../../images/solution.jpg"

function Planning() {
    return (
        <div>
            <div className="finplan">
                <h1 className='finan'>Financial Planning</h1>
                <div className="divred1"></div>
                <h2 className='finap'>A financial plan is a comprehensive evaluation of an investor’s current and future financial state by using currently known variables to predict future cash flows, asset values and withdrawal plans. Most individuals work in conjunction with their preferred financial planner and use current net worth, tax liabilities, asset allocation, and future retirement and estate plans in developing financial plans. These metrics are used along with estimates of asset growth to determine if a person’s financial goals can be met in the future, or what steps need to be taken to ensure that they are.</h2>
                <img className='graph1' src={graph1} alt="" />
            </div>
            <div className="inplan">
                <h1 className='inan'>Our Investment Plan</h1>
                <div className="divred2"></div>
                <div className="plans1">
                    <div className="plan1">
                        <h3 className='standard'>STANDARD</h3>
                        <span className='planspan'><h1>3%</h1> <a>/daily</a></span>
                        <h3 className="min">
                            Min: $50 - Max: $499
                            Duration: 3 Days
                            ROI: 9%
                            Instant Withdrawal
                            Antiminer S19 Pro
                        </h3>
                        <button className="depo">Deposit</button>
                    </div>
                    <div className="plan2">
                        <h3 className='standard'>PREMIUM</h3>
                        <span className='planspan'><h1>5%</h1> <a>/daily</a></span>
                        <h3 className="min">
                            Min: $500 - Max: $4,999
                            Duration: 5 Days
                            ROI: 25%
                            Instant Withdrawal
                            Antiminer S19 Pro
                        </h3>
                        <button className="depo">Deposit</button>
                    </div>
                    <div className="plan3">
                        <h3 className='standard'>PLATINUM</h3>
                        <span className='planspan'><h1>10%</h1> <a>/daily</a></span>
                        <h3 className="min">
                            Min: $5,000 - Unlimited
                            Duration: 7 Days
                            ROI: 70%
                            Instant Withdrawal
                            Antiminer S19 Pro
                        </h3>
                        <button className="depo">Deposit</button>
                    </div>
                </div>
            </div>
            <div className="working1">
                <div className="quality1">
                    <img src={qual} alt="" className="qual" />
                    <div className="text1">
                        <h2 className='qualit'>Quality</h2>
                        <h2 className="lor">
                            We put our best effort into each unique project knowing that the more we put into it, the more we get out of it.
                        </h2>
                    </div>
                </div>
                <div className="integrity1">
                    <img src={integ} alt="" className="qual" />
                    <div className="text1">
                        <h2 className='qualit'>Integrity</h2>
                        <h2 className="lor">
                            Our reputation has constantly put us at the top as our clients invest often smile home knowing that we are reliable.
                        </h2>
                    </div>
                </div>
                <div className="freedom1">
                    <img src={freedim} alt="" className="qual" />
                    <div className="text1">
                        <h2 className='qualit'>Freedom</h2>
                        <h2 className="lor">
                            Fierce independence runs in our blood. As Knapsack evolves we prioritize our freedom and sustainability over rapid growth
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Planning