import React from 'react'
import "./Signup.css"
import { FcGoogle } from 'react-icons/fc';
// import { BiLogoFacebookCircle } from 'react-icons/bi';
import { AiFillApple, AiOutlineMail } from 'react-icons/ai';
import { FaFacebookF, FaStoreSlash } from 'react-icons/fa'


function Signup() {
    return (
        <div>
            <div className="signup">
                <div className="signup_left">
                    <h1>Aʼzo boʻlish</h1>
                    <p>Avvalo ota-ona akkauntingizni yarating.</p>
                    <p className="pi2">Keyin biz sizga farzandingiz uchun akkaunt yaratishda koʻmaklashamiz.</p>
                    <p className="pi3">Khan Academy farzandingiz maktabda oʻtilgan fanlar borasida koʻmak olishi yoki mutlaqo yangi fan oʻrganishi uchun ajoyib platforma.</p>
                    <p className="pi4">Khan Academyʼga roʻyxatdan oʻtish orqali siz Foydalanish shartlari va Maxfiylik siyosatiga roziligingizni bildirasiz.</p>
                </div>
                <div className="signup_right">
                    <h4>Khan Academyʼga aʼzo boʻling:</h4>
                    <div className="btns">
                        <button className='active'>O`quvchi</button>
                        <button>O`qituvchi</button>
                        <button>Ota-ona</button>
                    </div>
                    <div className="links">
                        <li>
                            <FcGoogle />
                            <h3>Google orqali kiring</h3>
                        </li>
                        <li>
                            <FaFacebookF />
                            <h3>Facebook orqali kirish</h3>
                        </li>
                        <li>
                            <AiFillApple />
                            <h3>Apple bilan davom etish</h3>
                        </li>
                        <li>
                            <AiOutlineMail />
                            <h3>Email orqali ro'yxatdan o'tish</h3>
                        </li>
                    </div>
                    <div className="alink">
                        <a href="#">Oldin akkaunt yaratganmisiz?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup