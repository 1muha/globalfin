import React from 'react'
import './Footer.css'
import logo12 from "../../images/logo (1).png"

function Footer() {
    return (
        <div>
            <footer>
                <ul className="ul158">
                    <li className='lif'><img src={logo12} alt="" /></li>
                    <li className='gloh'>Global Finance is the trade name of Global Financial Investor Ltd, a financial company registered in the UK and with a registration No: 07827202</li>
                    <li className='number'>📞 +44 7400193301</li>
                </ul>
                <h1 className='h1us'>Useful Links</h1>
                <ul className="ulinks">
                    <h3 className='home1'>Home</h3>
                </ul>
                <ul className="ulinks">
                    <h3 className='home1'>Log In</h3>
                </ul>
                <ul className="ulinks">
                    <h3 className='home1'>Register</h3>
                </ul>
                <ul className="ulinks">
                    <h3 className='home1'>Find Us</h3>
                </ul>
                <div className="second">
                    <ul className="ulinks">
                        <h3 className='home1'>About</h3>
                    </ul>
                    <ul className="ulinks">
                        <h3 className='home1'>Faq's</h3>
                    </ul><ul className="ulinks">
                        <h3 className='home1'>Sign Up</h3>
                    </ul><ul className="ulinks">
                        <h3 className='home1'>Support</h3>
                    </ul>
                </div>
                <div className="third">
                    <h1 className='hulk'>Who We Are</h1>
                    <h2 className='gthe'>Global Finance is the leading financial establishment providing high-quality international investment services. We are always ready to partner with you by offering full financial support to individuals and companies worldwide..</h2>
                </div>
            </footer>
        </div>
    )
}

export default Footer