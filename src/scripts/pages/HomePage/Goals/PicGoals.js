import React from 'react';
import { Link, Route } from 'react-router-dom';
import GoalsPage from '../../GoalsPage/Goals';

const picGoals = () => {
        return (
                <div className='icon-box d-flex flex-column my-3' id="goalButtonsContainer">
                        <div className="ge-blue">
                                <p className='text-right my-0' id="goalButtonsTitle">BROWSE BY UN GLOBAL GOALS</p>
                        </div>
                        <div className="d-flex flex-wrap justify-content-end">

                                <div className="goal-button">
                                        <Link to={'/goal/poverty'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-01.png" alt="" id='goal1' />
                                        </Link>
                                </div>

                                <div className="goal-button">
                                        <Link to={'/goal/zeroHunger'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-02.png" alt="" id='goal2'/>
                                        </Link>
                                </div>
                                <div className="goal-button">
                                        <Link to={'/goal/goodHealth'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-03.png" alt="" id='goal3'/>
                                        </Link>
                                </div>
                                <div className="goal-button">
                                        <Link to={'/goal/qualityEducation'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-04.png" alt="" id='goal4'/>
                                        </Link>
                                </div>
                                <div className="goal-button">
                                        <Link to={'/goal/genderEquality'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-05.png" alt="" id='goal5'/>
                                        </Link>
                                </div>
                                <div className="goal-button">
                                        <Link to={'/goal/cleanWater'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-06.png" alt="" id='goal6'/>
                                        </Link>
                                </div>
                                <div className="goal-button">
                                        <Link to={'/goal/cleanEnergy'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-07.png" alt="" id='goal7'/>
                                        </Link>
                                </div>
                                <div className="goal-button">
                                        <Link to={'/goal/decentWork'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-08.png" alt="" id='goal8'/>
                                        </Link>
                                </div>
                                <div className="goal-button">
                                        <Link to={'/goal/industry'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-09.png" alt="" id='goal9'/>
                                        </Link>
                                </div>
                                <div className="goal-button" >
                                        <Link to={'/goal/reducedInequalities'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-10.png" alt="" id='goal10'/>
                                        </Link>
                                </div>
                                <div className="goal-button" >
                                        <Link to={'/goal/sustainableCities'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-11.png" alt="" id='goal11'/>
                                        </Link>
                                </div>
                                <div className="goal-button" >
                                        <Link to={'/goal/responsibleConsumption'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-12.png" alt="" id='goal12'/>
                                        </Link>
                                </div>
                                <div className="goal-button" >
                                        <Link to={'/goal/clientAction'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-13.png" alt="" id='goal13'/>
                                        </Link>
                                </div>
                                <div className="goal-button" >
                                        <Link to={'/goal/lifeBelowWater'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-14.png" alt="" id='goal14'/>
                                        </Link>
                                </div>
                                <div className="goal-button" >
                                        <Link to={'/goal/lifeOnLand'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-15.png" alt="" id='goal15'/>
                                        </Link>
                                </div>
                                <div className="goal-button" >
                                        <Link to={'/goal/peaceJustice'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-16.png" alt="" id='goal16'/>
                                        </Link>
                                </div>
                                <div className="goal-button" >
                                        <Link to={'/goal/partnershipForTheGoals'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-17.png" alt="" id='goal17'/>
                                        </Link>
                                </div>
                        </div>

                        <Route path="/goal/" component={GoalsPage} />

                </div>

        )


};

export default picGoals;