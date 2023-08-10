import React from 'react'
import './Navbar.css'
import img1 from '../../images/1.png'

function Navbar() {
    return (
        <div>
            <div className="Navbar">

                <input type="text" placeholder='Поиск' />
                <h1>Khan Academy</h1>

                

                <ul>
                    <li>
                        <a href="">Внести пожертвование</a>
                    </li>
                    <li>
                        <a href="">Войти</a>
                    </li>
                    <li>
                        <a href="">Зарегистрироваться</a>
                    </li>
                </ul>
                <h3>Курсы</h3>
                <hr />
            </div>
            <div className="Navbar1">
                <div className="Navbar2">
                    <img src={img1} alt="" />
                </div>
                <div className="Navbar3">
                    <h1 className='h11'>Для каждого ученика,</h1>
                    <h1>независимо от возраста.</h1>
                    <h1>Реальные результаты!</h1>
                    <hr />
                    <p>Миссия нашей некоммерческой организации – предоставить</p>
                    <p>повсеместный доступ к бесплатному образованию мирового класса</p>
                </div>
            </div>
            <div className="btn">
                    <button className='btnn'>Учащийся</button>
                    <button>Учитель</button>
                    <button>Родитель</button>
                </div>
        </div>
    )
}

export default Navbar