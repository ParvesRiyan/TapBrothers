import React, { Fragment } from 'react'
import { Typography } from '@mui/material'
import three1 from "../../image/three1.png"
import three2 from "../../image/three2.png"
import "./goalandachivment.css"

const GoalAndAchivment = () => {
    return (
        <Fragment>
            <div className="goalUpdate">
                <div className="profileHeader animateTop">
                    <div className="headerText">
                        <h2>TAP Bro</h2>
                        <p>AR Bondhu mohol somobay somiti</p>
                    </div>
                </div>
                <div className="goal">
                    <div className="goalLeft animateL">
                        <Typography variant='h3' className='headerFront'>
                            About Our Goal & Achivment
                        </Typography><br />
                        <Typography variant='h5' className='pera'>
                            WE ARE NOT HERE FOR COLLECTE THE MONEY FROM PEPOLE AND INVEST TO THE PEOPLE FOR PROFIT,
                            WE WILL BUSSINESS AND EARN MONEY FOR EVERYONE , AND WE WILL INVEST THE MONEY FOR EVERYONE ,
                            OUR PROFIT WILL FOR EVERYONE , SO NO ONE WILL BE OUR INVESTOR , EVERYONE WILL PARTNER FOR US AND ,
                            EVERYONE WILL OWNER OF OUR COMPANY , SO GET READY TO BE A PARTNER OF "TAP BROTHERS" ! AND ACHIV A BIG UNITY !
                        </Typography><br />
                        <Typography variant='p'>
                            " MONEY IS NOT OUR GOAL, THE GOAL IS HELP EACH OTHERS "
                        </Typography>
                    </div>
                    <div className="goalRight animateR">
                        <img src={three1} alt="TAP BRO" />
                    </div>
                </div>
                <hr />
                <div className="achivment">
                    <div className="achivmetnLeft animateL">
                        <img src={three2} alt="Tap brothers" />
                    </div>
                    <div className="achivmentRight animateR">
                        <Typography variant='h3' className='headerFront'>
                            Our Achivment
                        </Typography> <br />
                        <Typography variant='h5' className='pera'>
                            People trust us , that's our bigest achivment till now , and we are gonna provide them a lot of
                            love with some differnt thing , just wait and stay with us with your strong beliver mind ,
                        </Typography> <br />
                        <Typography variant='p'>
                            " YOU TRUST IS OUR BIGEST ACHIVMENT AND STRENGTH "
                        </Typography>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default GoalAndAchivment
