import React, { Fragment } from 'react'
import hero1 from "../../image/hero1.png"
import hero2 from "../../image/hero2.jpeg"
import promis from "../../image/promis.png"
import promis2 from "../../image/promis2.png"
import "./Home.css"
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <Fragment>
            <div className="HomeContainer">
                <div className="profileHeader animateTop">
                    <div className="headerText">
                        <h2>TAP Bro</h2>
                        <p>AR Bondhu mohol somobay somiti</p>
                    </div>
                </div>
                <div className="heroSection">
                    <div className="heroLeft">
                        <Typography variant='h2' className='animateL headerFront'>
                            Belive Us ! To Give You Something Differnt !
                        </Typography><br />
                        <Typography variant='h6' className='animateL'>
                            We are not here for save your money , we just want to do something with you or without you , But we will "IngshAllah"
                            we are invite you to do something differnt with us , and Be a TAP Bro Investor !
                        </Typography><br />
                        <Typography variant='p' className='animateL'>
                            "  Don't Belive on your Money ! Belive on Your self .  "
                        </Typography>

                    </div>
                    <div className="heroRight">
                        <img src={hero1} alt="Hero 1" className="animateR" />
                    </div>
                </div>

                <div className="secoundHero">
                    <div className="promiseHeader">
                        <img src={promis} alt="promis" className='animateL' />
                        <Typography variant='h3' className='headerFront'>
                            Our Promises For You
                        </Typography>
                        <img src={promis2} alt="promis2" className='animateR' />
                    </div>

                    <Typography variant='h6' className='animateL pera'>
                        * If You belive on us, your money should get back with profit or without profit but never losses (InshAllah)<br />
                        * we will bussiness for you and with you , but never gona trick with you ,<br />
                        * your 100 TK is also important for us ! as like you too , so your money privecy our first priority .<br />
                        * we need your belive on us first, then your money will work for us .<br />
                        * we are all open to everyone , Nothing to hide .
                    </Typography><br />
                    <Typography variant='p' className='animateR'>
                        " Let's help each others and make our dream true ! "
                    </Typography>
                </div>
            </div>

            <div className="thirdHero">
                <div className="right animateR" >
                    <img src={hero2} alt="hero2" className='animateL' />
                </div>
                <div className="left animateL">
                    <Typography variant='h5' className='pera'>
                        we will update our all kind of project to everyone
                        and everyone will know how we work , and what we want exactly,
                        so , here nothing to hide from anyone and anything , for see our
                        goal and achivment till now , go to the goal and achivment or click the bellow button ,
                    </Typography>

                    <Link to={"/goalandachivment"}>
                        <Button>ClickToSee</Button>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Home
