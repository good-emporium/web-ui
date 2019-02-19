import React from 'react';
import { Link, Route } from 'react-router-dom';
import GoalsPage from '../../GoalsPage/Goals';

const picGoals = () => {
        return (
                <div className='icon-box d-flex flex-column my-3' id="goalButtonsContainer">
                        <div className="ge-blue">
                                <p className='text-right my-0' id="goalButtonsTitle">BROWSE BY UNITED NATIONS GLOBAL GOALS</p>
                        </div>
                        <div className="d-flex flex-wrap justify-content-end">

                                <div className="goal-button">
                                        <Link to={{ pathname: '/goal/poverty', state: { sdgId: '1' }}}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-01.png" alt="" />
                                        </Link>
                                </div>

                                <div className="goal-button">
                                        <Link to={{ pathname: '/goal/zeroHunger', state: { sdgId: '2' }}}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-02.png" alt="" />
                                        </Link>
                                </div>
                                <div className="goal-button">
                                        <Link to={{ pathname: '/goal/goodHealth', state: { sdgId: '3' }}}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-03.png" alt="" />
                                        </Link>
                                </div>
                                <div className="goal-button">
                                        <Link to={{ pathname: '/goal/qualityEducation', state: { sdgId: '4' }}}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-04.png" alt="" />
                                        </Link>
                                </div>
                                <div className="goal-button">
                                        <Link to={{ pathname: '/goal/genderEquality', state: { sdgId: '5' }}}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-05.png" alt="" />
                                        </Link>
                                </div>
                                <div className="goal-button">
                                        <Link to={{ pathname: '/goal/cleanWater', state: { sdgId: '6' }}}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-06.png" alt="" />
                                        </Link>
                                </div>
                                <div className="goal-button">
                                        <Link to={{ pathname: '/goal/cleanEnergy', state: { sdgId: '7' }}}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-07.png" alt="" />
                                        </Link>
                                </div>
                                <div className="goal-button">
                                        <Link to={{ pathname: '/goal/decentWork', state: { sdgId: '8' }}}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-08.png" alt="" />
                                        </Link>
                                </div>
                                <div className="goal-button">
                                        <Link to={{ pathname: '/goal/industry', state: { sdgId: '9' }}}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-09.png" alt="" />
                                        </Link>
                                </div>
                                <div className="goal-button" >
                                        <Link to={{ pathname: '/goal/reducedInequalities', state: { sdgId: '10' }}}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-10.png" alt="" />
                                        </Link>
                                </div>
                                <div className="goal-button" >
                                        <Link to={{ pathname: '/goal/sustainableCities', state: { sdgId: '11' }}}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-11.png" alt="" />
                                        </Link>
                                </div>
                                <div className="goal-button" >
                                        <Link to={{ pathname: '/goal/responsibleConsumption', state: { sdgId: '12' }}}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-12.png" alt="" />
                                        </Link>
                                </div>
                                <div className="goal-button" >
                                        <Link to={{ pathname: '/goal/clientAction', state: { sdgId: '13' }}}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-13.png" alt="" />
                                        </Link>
                                </div>
                                <div className="goal-button" >
                                        <Link to={{ pathname: '/goal/lifeBelowWater', state: { sdgId: '14' }}}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-14.png" alt="" />
                                        </Link>
                                </div>
                                <div className="goal-button" >
                                        <Link to={{ pathname: '/goal/lifeOnLand', state: { sdgId: '15' }}}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-15.png" alt="" />
                                        </Link>
                                </div>
                                <div className="goal-button" >
                                        <Link to={{ pathname: '/goal/peaceJustice', state: { sdgId: '16' }}}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-16.png" alt="" />
                                        </Link>
                                </div>
                                <div className="goal-button" >
                                        <Link to={{ pathname: '/goal/partnershipForTheGoals', state: { sdgId: '17' }}}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-17.png" alt="" />
                                        </Link>
                                </div>
                        </div>

                        <Route path="/goal/" component={GoalsPage} />

                </div>

        )


};

export default picGoals;
