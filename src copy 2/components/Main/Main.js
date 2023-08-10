import React from "react";
import './Main.css'
import img1 from '../../images/bir.png'
import img2 from '../../images/logo (1).png'
import { BiChevronRight } from 'react-icons/bi';

function Main() {
    return (
        <div>
            <div className="image">
                <img src={img1} alt="" />
                <div className="card">
                    <img src={img2} alt="" />
                    <ul>
                        <li><p>About JELLYFISH</p></li>
                        <li><p>Company</p></li>
                        <li><p>Service</p></li>
                    </ul>
                    <div className="rec">
                        <button>Recruit <BiChevronRight /></button>
                    </div>
                    <div className="con">
                        <button>Contact <BiChevronRight /></button>
                    </div>
                    <div className="uz">
                        <h3>UZ</h3>
                    </div>
                </div>

            </div>
            <div className="our">
                <h2>Our vision statement</h2>
                <p>We believe that breakthrouths come either
                    from new knowledge or new experiences.
                    At Jellyfish, we strive to broaden your viewpoint.
                    Mission</p>
            </div>
            <div className="our2">
                <h1>Mission</h1>
                <p>To provide fair opportunity to people all over the world.
                    Not only in Japan, there is a huge disparity in opportunity distribution all over the world.
                    Our mission is to create opportunities to everyone, regardless of nationality, ethnicity, religion, culture and physical features.</p>
            </div>
            <div className="our3">
                <h1>Service</h1>
                <p>JELLYFISH has been developing business in various areas including education, employment management both in Japan and overseas. We understand how the development of technological innovations such as AI and loT is happening at a drastic pace. By incorporating new technologies to different areas, we will continue to provide and create great opportunities to help bring the ideal world for everyone to come true.</p>
            </div>
            <div className="our4">
                <h2>Human Resources</h2>
                <p>Our recruitment system for IT engineers aims to support mid-stage startups and companies that are growing fast in the IT venture. We provides all-round support for IT engineers through direct recruitment using SNS in various countries.
                    For further information, click here</p>
            </div>
            <div className="our5">
                <h2>Education</h2>
                <p>In order to improve the corporate clients’ Japanese speaking skills, we work on the foundation and development of online programs of Japanese language education. Consultants help business with common areas such as studying abroad in Japan and Japanese language learning.
                    For further information, click here</p>
            </div>
            <div className="our6">
                <h2>Investment Business</h2>
                <p>The company invests in technologies in early-stages in a practical and direct way. We are committed to help the hiring of IT engineers which is the main fuel for the growth of many companies. By doing so, we can increase the growth rate and the probability for success of the companies we invest in.
                    For further information, click here</p>
            </div>
            <div className="our7">
                <h2>Regional Creative Business</h2>
                <p>OKUTAMA+ is a project in development for the community in Okutama-cho, Nishitama-gun, Tokyo. The project is designed to resuse the abandoned junior highschool buildings.
                    For further information, click here</p>
            </div>
            <div className="c1">
                <h1>CONTACT</h1>
                <p>If you have any questions about our company or our business, please contact us from here.
                    We are a small operation and work from home. If you have any questions, please contact us by phone.
                    Also, due to the fact that our call center is outsourced, we are not able to provide an immediate response. Please understand this in advance.</p>
                <div className="hello">
                    <span>Inquiry by form</span>
                    <button>Contact Us</button>
                </div>
                <div className="ss2">
                    <span>Contact us by phone</span>
                    <h1>03-5437-0135</h1>
                    <div className="aaa">
                        <a href="#">Weekdays 9:30~18:30</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main;