import React from 'react'
import './Header.css'
// { import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; }

function Header() {
    return (
        <div>
            <nav>
                <ul className="first">
                    <li>
                        <h3 className='kurs'><a href="./course"></a> Kurslar</h3>
                    </li>
                    <li>
                        <input type="text" className="izla" placeholder='Izlash' />
                    </li>
                    <li>
                        <h2 className="logo"> <a href="./logo"></a> Khan Academy</h2>
                    </li>
                </ul>

                <ul className="second">
                    <li>
                        <h3 className='kurs'><a href="danat"></a> Xayriya</h3>
                    </li>
                    <li>
                        <h3 className='kurs'><a href="enter"></a> Kirish</h3>
                    </li>
                    <li>
                        <h3 className='kurs'><a href="azo"></a> A'zo bo'lish</h3>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header