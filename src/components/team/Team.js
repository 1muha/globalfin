import React from 'react'
import './Team.css'
import teamimg1 from "../../images/team5.jpg"
import teamimg2 from "../../images/team1.jpg"
import teamimg3 from "../../images/team2.jpg"
import teamimg4 from "../../images/team3.jpg"

function Team() {
    return (
        <div>
            <h1 className="expert">Expert Advisor</h1>
            <div className="divred2"></div>
            <div className="allteamad">
                <div className="teamad1">
                    <div className="teamad1">
                        <img className='teamimg1' src={teamimg1} alt="" />
                        <div className="h1h3">
                            <h1 className='mark1'>Mark Willy</h1>
                            <h3 className='jobtem1'>Marketing</h3>
                        </div>
                    </div>
                </div>
                <div className="teamad1">
                    <div className="teamad1">
                        <img className='teamimg1' src={teamimg2} alt="" />
                        <div className="h1h3">
                            <h1 className='mark1'>Mike Hussy</h1>
                            <h3 className='jobtem1'>Marketing</h3>
                        </div>
                    </div>
                </div><div className="teamad1">
                    <div className="teamad1">
                        <img className='teamimg1' src={teamimg3} alt="" />
                        <div className="h1h3">
                            <h1 className='mark1'>Anita Hubbard</h1>
                            <h3 className='jobtem1'>Marketing</h3>
                        </div>
                    </div>
                </div><div className="teamad1">
                    <div className="teamad1">
                        <img className='teamimg1' src={teamimg4} alt="" />
                        <div className="h1h3">
                            <h1 className='mark1'>Robert Smith</h1>
                            <h3 className='jobtem1'>Accountant</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wealways">
                <h1 className="ahead">We are always ahead.
                    Professional Solutions for Your Business.</h1>
                <div className="spans">
                    <span className="s38"><h1 className="s387">3871</h1>Days Online</span>
                    <span className="s38"><h1 className="s387">2 MILLION</h1>Total Members</span>
                    <span className="s38"><h1 className="s387">$1871</h1>Total Deposited</span>
                    <span className="s38"><h1 className="s387">$871</h1>Total Withdrawal</span>
                </div>
            </div>
        </div>
    )
}

export default Team