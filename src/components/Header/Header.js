import React from 'react'
import './Header.css'
import logo from "../../images/logo (1).png"
import zoltan from "../../images/about-one.png"

function Header() {
    return (
        <div>
            <nav>
                <img className='logo' src={logo} alt="" />
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>FAQ'S</li>
                    <li>TERMS</li>
                    <li>SUPPORT</li>
                    <li>LOGIN</li>
                    <li>REGISTER</li>
                </ul>
            </nav>
            <div className="slider">
                <h1 className='welcom'>Welcome To</h1>
                <h2 className='creat'>Creating wealth for our clients irrespective of market flow, We are Specialist in Financial Solutions,</h2>
                <button className="about">About Us 👉</button>
            </div>
            <section className='section1'>
                <div className="freedom">
                    <h1 className="choice">Freedom of Choice</h1>
                    <p>Benefit from tailored solutions that meet your needs. Over 100 tradable assets and unlimited market access</p>
                </div>
                <div className="connect">
                    <h1 className="choice">Connecting <br />Opportunities</h1>
                    <p>Opportunities arise daily and are numerous, and we provide you with the means to connect from one to the other</p>
                </div>
                <div className="great">
                    <h1 className="choice">Great Experiences</h1>
                    <p>A great client experience begins with a great team member experience. We foster an environment for self financial success.</p>
                </div>
            </section>
            <div className="rasm">
                <img className='zoltan' src={zoltan} alt="" />
                <div className="qizil1"></div>
                <h2 className='gbc'>Global Finance is an International Financial Planning company with offices in multiple jurisdictions over the world. Working with Global Finance gives me the ability to advise international expatriates.

                    <i>                     I am Kecskemeti Zoltan, a senior advisor for an independently owned financial planning company called Global Finance.</i>


                    <span className="span1">                                                                           Kecskemeti Zoltan   <h3>CEO, Global Finance</h3></span>

                </h2>
            </div>
        </div>
    )
}

export default Header