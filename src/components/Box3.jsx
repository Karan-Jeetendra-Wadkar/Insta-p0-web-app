import React from 'react'
import './Box3.css'
import profilePic from '../assets/profilePic.jpg'

const Box3 = () => {
  return (

    //main part
    <div className='mainPart'>
        <div className="switch">

        <img className='switchImg' src={profilePic} alt="Rajnikanta" />
            <div className="switchto">
                <div><b>mr.karan_official98</b></div>
                <div className="acName">Karan Wadkar</div>
            </div>
            <div className="switchBtn">Switch</div>
        </div>
    
        <div className="suggestedName">
            <div className="suggestN">Suggested for you</div>
            <div className="seeAllBtn">See All</div>
        </div>


        <div className="suggested">

        <div className="switch">
        <img className='switchImg' src="https://img.mensxp.com/media/content/2020/Sep/Old-Photos-Of-Amitabh-Bachchan-740x500-11_5f649ce487504.jpeg?w=500&h=830" alt="Amitabh" />
        <div className="switchto">
                <div><b>Legend_amitabh</b></div>
                <div className="acName">New To Instagram</div>
            </div>
            <div className="secondBtn">Follow</div>
        </div>

        <div className="switch">
            <img className='switchImg' src="https://i.pinimg.com/originals/09/5c/e9/095ce95dfeebd6c01ba32b504ad118ef.jpg" alt="Twinkle khanna" />
            <div className="switchto">
                <div><b>Twinkle Khanna</b></div>
                <div className="acName">New To Instagram</div>
            </div>
            <div className="secondBtn">Follow</div>
        </div>

        <div className="switch">
            <img className='switchImg' src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/10/10/Pictures/_e3f84864-8ec8-11e6-b1ee-4de56c7571da.jpg" alt="Rekha" />
            <div className="switchto">
                <div><b>Bhanurekha</b></div>
                <div className="acName">New To Instagram</div>
            </div>
            <div className="secondBtn">Follow</div>
        </div>

        <div className="switch">
            <img className='switchImg' src="https://ilarge.lisimg.com/image/6498060/740full-sunny-deol.jpg" alt="Sunny Deol" />
            <div className="switchto">
                <div><b>Sunny Deol</b></div>
                <div className="acName">New To Instagram</div>
            </div>
            <div className="secondBtn">Follow</div>
        </div>

        <div className="switch">
            <img className='switchImg' src="https://timesofindia.indiatimes.com/thumb/msid-65263198,width-800,height-600,resizemode-4/65263198.jpg" alt="Lakshya" />
            <div className="switchto">
                <div><b>Laxmikant Berde</b></div>
                <div className="acName">New To Instagram</div>
            </div>
            <div className="secondBtn">Follow</div>
        </div>


        </div>
    
        <div className="aboutInsta">
            <div className="aboutDoc">
                <p>About. Help. Press. API. Jobs. Privacy. Terms</p>
                <p>Location. Language. Meta Verified</p>
            </div>
                <div className="footer">
                <p>© 2025 INSTAGRAM FROM META</p>
                </div>
        </div>
    </div>
  )
}

export default Box3;

